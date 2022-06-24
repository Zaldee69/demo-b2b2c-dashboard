import { useState } from "react";
import type { NextPage } from "next";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";

type TForm = { tilaka_name?: string };

const DocumentSigning: NextPage = () => {
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
  };

  const getListResquestData = ():void => {}

  return (
    <>
      <Head>
        <title>Penandatanganan Dokumen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sidebar
        setIsSearchGroup={setIsSearchGroup}
        isSearchGroup={isSearchGroup}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
        getListResquestData={getListResquestData}
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
            Penandatanganan Dokumen
          </p>
        </div>
        <div className="ml-0 md:ml-72 px-3 md:px-10 flex justify-center">
          <div className="bg-white shadow-lg rounded w-full max-w-md mt-12 px-10 pt-10 pb-12">
            <div className="flex justify-center">
              <Image
                src="/illustration/DocumentSigning.svg"
                width="120px"
                height="120px"
              />
            </div>
            <form onSubmit={onSubmitHandler}>
              <label>
                <p className="text-neutral200 font-normal font-p text-sm">
                  Tilaka Name
                </p>
                <input
                  type="text"
                  name="tilaka_name"
                  placeholder="Masukkan Tilaka Name"
                  required
                  onChange={onChangeHandler}
                  className="placeholder:text-neutral50 text-neutral800 text-sm p-4 w-full border border-neutral50 rounded mt-3 focus:outline-none focus:ring-1 ring-blue400"
                />
              </label>
              <div className="mt-9 flex justify-end">
                <button className="text-white bg-blue400 py-2.5 px-6 rounded">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentSigning;
