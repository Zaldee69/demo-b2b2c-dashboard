import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { restGetListRequestData } from "@/infrastructure/rest/list-request/index";



const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [isSearchGroup, setIsSearchGroup] = useState<boolean>(false);
  const [page, setPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [channel, setChannel] = useState("");
  const [status, setStatus] = useState("");
  const [nikOrReqId, setNikOrReqId] = useState("");

  const indexOfLastData = currentPage * page;
  const indexOfFirstData = indexOfLastData - page;
  const currentPages = data.slice(indexOfFirstData, indexOfLastData);
  const pageCount = total / page;

  const getListResquestData = () => {
    restGetListRequestData({
      params: { channel, nikOrReqId, status },
    }).then((res) => {
      setData(res.rows);
      setTotal(res.count);
    });
  };

  useEffect(() => {
    getListResquestData();
  }, []);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.currentTarget as typeof e.currentTarget;
    if (name === "nik") {
      setNikOrReqId(value);
    } else if (name === "channel") {
      setChannel(value);
    } else {
      setStatus(value);
    }
    getListResquestData();
  };

  const handlePageClick = (data: any) => {
    setCurrentPage(data);
  };

  const resetField = () => {
    setNikOrReqId("");
    setChannel("");
    setStatus("");
    getListResquestData();
  };

  return (
    <>
      <Head>
        <title>List Request Akun Tilaka</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sidebar
        setIsSearchGroup={setIsSearchGroup}
        isSearchGroup={isSearchGroup}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
        onChangeHandler={onChangeHandler}
        setNikOrReqId={setNikOrReqId}
        setChannel={setChannel}
        setStatus={setStatus}
        channel={channel}
        status={status}
        nikOrReqId={nikOrReqId}
        resetField={resetField}
      />
      <div className="mb-5 overflow-x-hidden h-screen">
        <div className="flex flex-row  items-center md:absolute relative  bg-neutral10 justify-between px-10 py-5 ">
          <div className="flex space-x-4">
            <Image src="/icons/APIIcon.svg" width={35} height={35} />
            <div className="text-neutral800">
              <p className="text-xl font-bold">Prototype</p>
              <span>API Personal</span>
            </div>
          </div>
          <img
            onClick={() => setShowSideBar(true)}
            src="/icons/MenuIcon.svg"
            width={35}
            height={35}
            className="md:hidden"
          />
        </div>
        <div className="bg-blue h-12  md:h-20  px-5 flex items-center">
          <p className=" text-white  md:text-xl md:ml-80 ">
            List Request Akun Tilaka
          </p>
        </div>
        <fieldset className="w-full md:hidden space-x-5 px-3 mt-5 space-y-1 flex ">
          <div className="flex-1">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative rounded border">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <Image src="/icons/SearchOutlined.svg" height={25} width={25} />
              </span>
              <input
                type="text"
                onChange={onChangeHandler}
                value={nikOrReqId}
                name="nik"
                placeholder="Cari Register ID / NIK"
                className="w-full py-2 pl-10 text-sm rounded-md sm:w-full focus:outline-none dark:bg-gray-800 dark:text-gray-100 border-borderColor"
              />
            </div>
          </div>
          <p
            onClick={() => {
              setIsSearchGroup(true);
              setShowSideBar(true);
            }}
            className="text-blue font-medium"
          >
            More Filter
          </p>
        </fieldset>
        <form className=" w-full  md:flex md:flex-col lg:flex-row lg:items-center md:items-start  hidden  ml-80    items-center gap-5">
          <div className="relative rounded mt-5 border">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Image src="/icons/SearchOutlined.svg" height={25} width={25} />
            </span>
            <input
              onChange={onChangeHandler}
              value={nikOrReqId}
              type="text"
              name="nik"
              placeholder="Cari Register ID / NIK"
              className="w-full py-3 pl-10 text-sm rounded-md focus:outline-none border-borderColor"
            />
          </div>
          <div className="relative rounded lg:mt-5 border">
            <span className="absolute inset-y-0 left-0  flex items-center pl-2">
              <Image src="/icons/Channell.svg" height={25} width={25} />
            </span>
            <select
              onChange={onChangeHandler}
              value={channel}
              className="w-full appearance-none	 py-3 text-[#A2A7B2] px-10 text-sm rounded-md focus:outline-none border-borderColor"
              name="channel"
              id="channel"
            >
              <option selected value="">
                Nama Channel
              </option>
              <option value="Dana Bagus">Dana Bagus</option>
              <option value="Dana Bagus">Dana Bagus</option>
              <option value="Dana Bagus">Dana Bagus</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-5">
              <Image src="/icons/arrowdon.svg" height={13} width={13} />
            </span>
          </div>
          <div className="relative rounded lg:mt-5 border">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Image src="/icons/BarsIcon.svg" height={25} width={25} />
            </span>
            <select
              onChange={onChangeHandler}
              value={status}
              className="w-full py-3 appearance-none	 text-[#A2A7B2] px-10 text-sm rounded-md focus:outline-none border-borderColor"
              name="status"
              id="status"
            >
              <option selected value="">
                Status
              </option>
              <option value="Daftar">Dalam Proses</option>
              <option value="Dalam Proses">Cek Nik</option>
              <option value="Terdaftar">Terdaftar</option>
              <option value="Penautan">Penautan</option>
              <option value="Tertaut">Tertaut</option>
              <option value="Tertaut">Daftar</option>
              <option value="Kadaluarsa">Kadaluarsa</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-5">
              <Image src="/icons/arrowdon.svg" height={13} width={13} />
            </span>
          </div>
          <button
            type="button"
            onClick={resetField}
            className="text-blue mt-5 font-medium"
          >
            Reset
          </button>
        </form>
        <Table currentPages={currentPages} />
        <Pagination
          pageCount={pageCount}
          setPage={setPage}
          page={page}
          handlePageClick={handlePageClick}
          total={total as number}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {currentPages?.map((el: any, idx: any) => (
          <div key={idx} className="px-3 md:hidden mt-5">
            <div className="border w-full mb-3 bg-white p-5 rounded-xl">
              <p className="text-neutral80 font-semibold">Register ID</p>
              <p>{el.id}</p>
              <p className="text-neutral80 font-semibold mt-5">NIK</p>
              <p>{el.nik}</p>
              <p className="text-neutral80 font-semibold mt-5">Channel Name</p>
              <p>{el.Channel.name}</p>
              <p className="text-neutral80 font-semibold mt-5">Status</p>
              <p
                className={`${
                  el.status.toLowerCase() === "cek nik"
                    ? "bg-checkColor"
                    : el.status.toLowerCase() === "daftar"
                    ? "bg-registerColor"
                    : el.status.toLowerCase() === "dalam proses"
                    ? "bg-onProgressColor"
                    : el.status.toLowerCase() === "terdaftar"
                    ? "bg-registeredColor"
                    : el.status.toLowerCase() === "penautan"
                    ? "bg-linkColor"
                    : el.status.toLowerCase() === "tertaut"
                    ? "bg-linkedColor"
                    : el.status.toLowerCase() === "kadaluarsa"
                    ? "bg-expiredColor"
                    : ""
                } w-fit px-2 py-1 rounded-xl`}
              >
                {el.status}
              </p>
              <a rel="noopener noreferrer" target="_blank" href={el.Channel.redirect_url}  className="bg-blue text-center leading-10 mx-auto block text-white h-10 mt-10 w-full rounded-md">
                  {el.status.toLowerCase() === "cek nik"
                    ? "Cek"
                    : el.status.toLowerCase() === "daftar"
                    ? "Lanjut"
                    : el.status.toLowerCase() === "dalam proses"
                    ? "Lihat"
                    : el.status.toLowerCase() === "terdaftar"
                    ? "Tautkan"
                    : el.status.toLowerCase() === "penautan"
                    ? "Lanjut"
                    : el.status.toLowerCase() === "tertaut"
                    ? "Login"
                    : el.status.toLowerCase() === "kadaluarsa"
                    ? "-"
                    : ""}
                </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Table = ({ currentPages }: any) => {
  return (
    <div className=" hidden mt-8 overflow-x-auto md:block md:pr-5 lg:pr-0 ml-80">
      <table style={{ width: "950px" }} className=" table-fixed border">
        <thead className="bg-white">
          <tr className="text-left ">
            <th className="font-medium text-sm border-b p-4 ">Register ID</th>
            <th className="font-medium text-sm border-b py-4 ">NIK</th>
            <th className="font-medium text-sm border-b py-4">Channel Name</th>
            <th className="font-medium text-sm border-b py-4">Status</th>
            <th className="font-medium text-sm border-b py-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentPages?.map((el: any, idx: any) => (
            <tr key={idx} className="border-b text-left text-sm bg-white">
              <td className="font-normal text-sm py-5 px-4">{el.request_id}</td>
              <td>{el.nik}</td>
              <td>{el.Channel.name}</td>
              <td>
                <span
                  className={`${
                    el.status.toLowerCase() === "cek nik"
                      ? "bg-checkColor"
                      : el.status.toLowerCase() === "daftar"
                      ? "bg-registerColor"
                      : el.status.toLowerCase() === "dalam proses"
                      ? "bg-onProgressColor"
                      : el.status.toLowerCase() === "terdaftar"
                      ? "bg-registeredColor"
                      : el.status.toLowerCase() === "penautan"
                      ? "bg-linkColor"
                      : el.status.toLowerCase() === "tertaut"
                      ? "bg-linkedColor"
                      : el.status.toLowerCase() === "kadaluarsa"
                      ? "bg-expiredColor"
                      : ""
                  } w-fit px-2 py-1 rounded-xl`}
                >
                  {el.status}
                </span>{" "}
              </td>
              <td>
                <button className="bg-blue text-white h-10 w-20 rounded-md">
                  {el.status.toLowerCase() === "cek nik"
                    ? "Cek"
                    : el.status.toLowerCase() === "daftar"
                    ? "Lanjut"
                    : el.status.toLowerCase() === "dalam proses"
                    ? "Lihat"
                    : el.status.toLowerCase() === "terdaftar"
                    ? "Tautkan"
                    : el.status.toLowerCase() === "penautan"
                    ? "Lanjut"
                    : el.status.toLowerCase() === "tertaut"
                    ? "Login"
                    : el.status.toLowerCase() === "kadaluarsa"
                    ? "-"
                    : ""}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Home;
