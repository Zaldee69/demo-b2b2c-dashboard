import { useState } from "react";
import type { NextPage } from "next";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import Pagination from "@/components/Pagination";


const Home: NextPage = () => {
  const data = [
    {
      id: 13,
      regId: 13131232323232323,
      channelName: "Danaaa Bagus",
      status: "Cek NIK",
      nik: 262732737217826127,
    },
    {
      id: 14,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Daftar",
      nik: 262732737217826127,
    },
    {
      id: 15,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Dalam Proses",
      nik: 262732737217826127,
    },
    {
      id: 26,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Terdaftar",
      nik: 262732737217826127,
    },
    {
      id: 3,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Penautan",
      nik: 262732737217826127,
    },
    {
      id: 4,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Tertaut",
      nik: 262732737217826127,
    },
    {
      id: 5,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Kadaluarsa",
      nik: 262732737217826127,
    },
    {
      id: 6,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Terdaftar",
      nik: 262732737217826127,
    },
    {
      id: 7,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Penautan",
      nik: 262732737217826127,
    },
    {
      id: 8,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Tertaut",
      nik: 262732737217826127,
    },
    {
      id: 9,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Cek NIK",
      nik: 262732737217826127,
    },
    {
      id: 10,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Dalam Proses",
      nik: 262732737217826127,
    },
    {
      id: 11,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Terdaftar",
      nik: 262732737217826127,
    },
    {
      id: 12,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Penautan",
      nik: 262732737217826127,
    },
    {
      id: 13,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Cek NIK",
      nik: 262732737217826127,
    },
    {
      id: 14,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Penautan",
      nik: 262732737217826127,
    },
    {
      id: 15,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Tertaut",
      nik: 262732737217826127,
    },
    {
      id: 16,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Dalam Proses",
      nik: 262732737217826127,
    },
    {
      id: 17,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Daftar",
      nik: 262732737217826127,
    },
    {
      id: 18,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Daftar",
      nik: 262732737217826127,
    },
    {
      id: 19,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Tertaut",
      nik: 262732737217826127,
    },
    {
      id: 20,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Cek NIK",
      nik: 262732737217826127,
    },
    {
      id: 21,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Dalam Proses",
      nik: 262732737217826127,
    },
    {
      id: 22,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Terdaftar",
      nik: 262732737217826127,
    },
    {
      id: 23,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Penautan",
      nik: 262732737217826127,
    },
    {
      id: 24,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Tertaut",
      nik: 262732737217826127,
    },
    {
      id: 25,
      regId: 13131232323232323,
      channelName: "Dana Bagus",
      status: "Kadaluarsa",
      nik: 262732737217826127,
    },
  ];

  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [isSearchGroup, setIsSearchGroup] = useState<boolean>(false);
  const [page, setPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastData = currentPage * page;
  const indexOfFirstData = indexOfLastData - page;
  const currentPages = data.slice(indexOfFirstData, indexOfLastData);
  const pageCount = data.length / page;
  const [channel, setChannel] = useState("");
  const [status, setStatus] = useState("");
  const [nik, setNik] = useState("");

 

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement |  HTMLSelectElement>) => {
    const { name, value } = e.target as typeof e.target
    if (name === "nik") {
      setNik(value);
    } else if (name === "channel") {
      setChannel(value);
    } else {
      setStatus(value);
    }
  };

  const handlePageClick = (data: any) => {
    setCurrentPage(data.selected + 1);
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
                name="Search"
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
              value={nik}
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
              <option  selected value="">
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
              <option value="Dalam Proses">Dalam Proses</option>
              <option value="Terdaftar">Terdaftar</option>
              <option value="Penautan">Penautan</option>
              <option value="Tertaut">Tertaut</option>
              <option value="Kadaluarsa">Kadaluarsa</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-5">
              <Image src="/icons/arrowdon.svg" height={13} width={13} />
            </span>
          </div>
        </form>
        <Table currentPages={currentPages} />
        <Pagination
        pageCount={pageCount}
        setPage={setPage}
        page={page}
        handlePageClick={handlePageClick}
        total={data.length}

      />
        {currentPages.map((el) => (
          <div key={el.id} className="px-3 md:hidden mt-5">
            <div className="border w-full mb-3 bg-white p-5 rounded-xl">
              <p className="text-neutral80 font-semibold">Register ID</p>
              <p>{el.regId}</p>
              <p className="text-neutral80 font-semibold mt-5">NIK</p>
              <p>{el.nik}</p>
              <p className="text-neutral80 font-semibold mt-5">Channel Name</p>
              <p>{el.channelName}</p>
              <p className="text-neutral80 font-semibold mt-5">Status</p>
              <p
                className={`${
                  el.status === "Cek NIK"
                    ? "bg-checkColor"
                    : el.status === "Daftar"
                    ? "bg-registerColor"
                    : el.status === "Dalam Proses"
                    ? "bg-onProgressColor"
                    : el.status === "Terdaftar"
                    ? "bg-registeredColor"
                    : el.status === "Penautan"
                    ? "bg-linkColor"
                    : el.status === "Tertaut"
                    ? "bg-linkedColor"
                    : el.status === "Kadaluarsa"
                    ? "bg-expiredColor"
                    : ""
                } w-fit px-4 py-1 rounded-xl`}
              >
                {el.status}
              </p>
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
      <table style={{width: "950px"}} className=" table-fixed border">
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
          {currentPages.map((el: any) => (
            <tr key={el.id} className="border-b text-left text-sm bg-white">
              <td className="font-normal text-sm py-5 px-4">{el.regId}</td>
              <td>{el.nik}</td>
              <td>{el.channelName}</td>
              <td>
                <span
                  className={`${
                    el.status === "Cek NIK"
                      ? "bg-checkColor"
                      : el.status === "Daftar"
                      ? "bg-registerColor"
                      : el.status === "Dalam Proses"
                      ? "bg-onProgressColor"
                      : el.status === "Terdaftar"
                      ? "bg-registeredColor"
                      : el.status === "Penautan"
                      ? "bg-linkColor"
                      : el.status === "Tertaut"
                      ? "bg-linkedColor"
                      : el.status === "Kadaluarsa"
                      ? "bg-expiredColor"
                      : ""
                  } w-fit px-2 py-1 rounded-xl`}
                >
                  {el.status}
                </span>{" "}
              </td>
              <td>
                <button className="bg-blue text-white h-10 w-20 rounded-md">
                  {el.status === "Cek NIK"
                    ? "Cek"
                    : el.status === "Daftar"
                    ? "Lanjut"
                    : el.status === "Dalam Proses"
                    ? "Lihat"
                    : el.status === "Terdaftar"
                    ? "Tautkan"
                    : el.status === "Penautan"
                    ? "Lanjut"
                    : el.status === "Tertaut"
                    ? "Login"
                    : el.status === "Kadaluarsa"
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
