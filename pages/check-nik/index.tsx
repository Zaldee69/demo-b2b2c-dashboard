import { useState } from "react";
import type { NextPage } from "next";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";

type TForm = { nik?: string };

const CheckNIK: NextPage = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [isSearchGroup, setIsSearchGroup] = useState<boolean>(false);
  const [form, formSetter] = useState<TForm>({});

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as typeof e.target;
    formSetter({ ...form, [name]: value });
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // hit api with form state data
    alert(JSON.stringify(form, null, 4));

    // success ?
    // openModalCheckNIKResult();
    toggleModalCheckNIKResult();
  };

  const toggleModalCheckNIKResult = (): void => {
    document.getElementById("modalCheckNIKResult")?.click();
  };

  return (
    <>
      <Head>
        <title>Pengecekan NIK</title>
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
          <p className=" text-white  md:text-xl md:ml-80 ">Pengecekan NIK</p>
        </div>
        <div className="ml-0 md:ml-72 px-3 md:px-10 flex justify-center">
          <div className="bg-white shadow-lg rounded w-full max-w-md mt-12 px-10 pt-10 pb-12">
            <div className="flex justify-center">
              <Image
                src="/illustration/CheckNIK.svg"
                width="120px"
                height="120px"
              />
            </div>
            <form onSubmit={onSubmitHandler}>
              <label>
                <p className="text-neutral200 font-normal font-p text-sm">
                  NIK
                </p>
                <input
                  type="text"
                  name="nik"
                  placeholder="Masukkan NIK"
                  required
                  //   pattern=".{16,16}[0-9]"
                  //   title="harus berisi 16 digit angka"
                  onChange={onChangeHandler}
                  className="placeholder:text-neutral50 text-neutral800 text-sm p-4 w-full border border-neutral50 rounded mt-3 focus:outline-none focus:ring-1 ring-blue400"
                />
              </label>
              <div className="mt-9 flex justify-end">
                <button className="text-white bg-blue400 py-2.5 px-6 rounded">
                  Cek
                </button>
              </div>
            </form>
          </div>
        </div>

        <input
          type="checkbox"
          id="modalCheckNIKResult"
          className="modal-toggle"
        />
        <label className="modal cursor-pointer" htmlFor="modalCheckNIKResult">
          <label
            className="modal-box rounded max-w-3xl px-6 pt-4 pb-6 bg-white"
            htmlFor=""
          >
            <div className="flex items-start md:items-center px-4 py-5 flex-wrap flex-col md:flex-row ">
              <p className="text-sm text-neutral200">Request ID</p>
              <div className="text-sm text-neutral800 bg-neutral40 px-2.5 py-0.5 ml-0 md:ml-3 mt-3 md:mt-0">
                de836b20-2b27-4180-ab5b-d5703edb5717
              </div>
              <div className="bg-registerColor px-3 py-0.5 text-neutral800 rounded-xl ml-0 md:ml-3 mt-3 md:mt-0">
                Daftar
              </div>
            </div>
            <div className="bg-neutral20 px-4 sm:px-12 md:px-32 py-4">
              <p className="text-lg sm:text-xl md:text-2xl font-normal text-center text-neutral800">
                Halaman <span className="italic">Customer Consent</span>
              </p>
              <div className="mt-3 text-center">
                <Image
                  src="/illustration/CustomerConsent.svg"
                  width="151px"
                  height="151px"
                />
              </div>
              <p className="mt-3 font-normal text-neutral800 text-sm">
                Dengan melakukan Aktivasi Akun Tilaka berarti Anda setuju untuk
                membagikan informasi kepada Tilaka Nusa Teknologi sebagai
                partner tanda tangan digital Dana Bagus.
              </p>
              <label
                className="mt-3 label cursor-pointer"
                htmlFor="checkNIKResultAgree"
              >
                <input
                  id="checkNIKResultAgree"
                  type="checkbox"
                  className="checkbox checkbox-primary"
                />
                <p className="ml-4 font-normal text-neutral200 text-xs">
                  Saya menyatakan bahwa data yang saya isi adalah benar dan
                  bertanggung jawab atas keaslian data.
                </p>
              </label>
            </div>
            <div className="flex justify-end mt-5">
              <button
                onClick={toggleModalCheckNIKResult}
                className="bg-white hover:opacity-50 text-blue400 px-6 py-2.5 rounded hover:cursor-pointer"
              >
                Batal
              </button>
              <button className="bg-blue400 hover:opacity-50 text-white px-6 py-2.5 rounded hover:cursor-pointer">
                Lanjut
              </button>
            </div>
          </label>
        </label>
      </div>
    </>
  );
};

export default CheckNIK;
