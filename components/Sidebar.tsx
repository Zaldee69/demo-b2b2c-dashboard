import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearchGroup: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeHandler?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  resetField?: () => void;
  getListResquestData: () => void | undefined
  channel?: string;
  status?: string;
  nikOrReqId?: string;
  showSideBar: boolean;
  isSearchGroup: boolean;
};

const Sidebar = ({
  setShowSideBar,
  showSideBar,
  isSearchGroup,
  setIsSearchGroup,
  onChangeHandler,
  channel,
  status,
  nikOrReqId,
  resetField,
  getListResquestData
}: Props) => {
  const router = useRouter();

  return (
    <aside
      className={`w-full z-50 fixed  ${
        !showSideBar ? "left-full" : "left-0"
      } transition-all duration-500 ease-out md:w-72  h-screen  md:left-0 md:bg-white bg-neutral10`}
    >
      <div className=" flex-row z-0 absolute top-0 items-center md:flex hidden px-5 pt-4 bg-white justify-between">
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
          className=" md:hidden"
        />
      </div>
      <nav className="space-y-8 z-50 md:pt-20 text-sm">
        <div className="space-y-2">
          <button
            onClick={() => {
              setShowSideBar(false);
              setIsSearchGroup(false);
            }}
            className="absolute  z-50 right-10 top-10"
          >
            <img
              className=" md:hidden"
              src="/icons/XIcon.svg"
              height={25}
              width={25}
              alt="close"
            />
          </button>
          {isSearchGroup ? (
            <form  className="pt-20 px-8 w-full h-full flex flex-col space-y-5">
              <div className="relative rounded border">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image
                    src="/icons/SearchOutlined.svg"
                    height={25}
                    width={25}
                  />
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
              <div className="relative rounded border">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <Image src="/icons/Channell.svg" height={25} width={25} />
                </span>
                <select
                  onChange={onChangeHandler}
                  value={channel}
                  className="w-full appearance-none	 py-3 text-[#A2A7B2] px-10 text-sm rounded-md focus:outline-none border-borderColor"
                  name="channel"
                  id="channel"
                >
                  <option selected defaultValue="null">
                    Nama Channel
                  </option>
                  <option defaultValue="Dana Bagus">Dana Bagus</option>
                  <option defaultValue="Dana Bagus">Dana Bagus</option>
                  <option defaultValue="Dana Bagus">Dana Bagus</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-5">
                  <Image src="/icons/arrowdon.svg" height={13} width={13} />
                </span>
              </div>
              <div className="relative rounded border">
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
                  <option selected defaultValue="null">
                    Status
                  </option>
                  <option defaultValue="Daftar">Dalam Proses</option>
                  <option defaultValue="Dalam Proses">Dalam Proses</option>
                  <option defaultValue="Terdaftar">Terdaftar</option>
                  <option defaultValue="Penautan">Penautan</option>
                  <option defaultValue="Tertaut">Tertaut</option>
                  <option defaultValue="Kadaluarsa">Kadaluarsa</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-5">
                  <Image src="/icons/arrowdon.svg" height={13} width={13} />
                </span>
              </div>
              <div className="absolute flex space-x-5 text-lg bottom-36 right-10">
                <button
                  type="button"
                  onClick={resetField}
                  className="text-blue font-medium"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    getListResquestData()
                    setShowSideBar(false);
                    setIsSearchGroup(false);
                  }}
                  className="bg-blue text-white h-10 w-20 rounded-sm"
                >
                  Filter
                </button>
              </div>
            </form>
          ) : (
            <div
              style={{ margin: 0 }}
              className="flex flex-col font-medium  md:pt-0 pt-20  space-y-1"
            >
              <Link href="/">
                <a
                  className={`flex group hover:bg-blue80 px-5 py-5 w-full items-center space-x-3 ${
                    router.asPath == "/" ? "bg-blue80" : ""
                  }`}
                >
                  <Image
                    src="/icons/BarsIcon.svg"
                    height={30}
                    width={30}
                    alt="menu"
                  />
                  <p
                    className={`"text-neutral800 ${
                      router.asPath === "/" ? "text-blue" : ""
                    } group-hover:text-blue"`}
                  >
                    List Request Akun Tilaka
                  </p>
                </a>
              </Link>

              <Link href="/check-nik">
                <a
                  className={`flex group hover:bg-blue80 px-5 py-5 w-full items-center space-x-3 ${
                    router.asPath == "/check-nik" ? "bg-blue80" : ""
                  }`}
                >
                  <Image
                    src="/icons/IdcardIcon.svg"
                    height={30}
                    width={30}
                    alt="menu"
                  />
                  <p
                    className={`"text-neutral800 ${
                      router.asPath === "/check-nik" ? "text-blue" : ""
                    } group-hover:text-blue"`}
                  >
                    Pengecekan NIK
                  </p>
                </a>
              </Link>
              <Link href="/document-signing">
                <a
                className="flex group hover:bg-blue80 px-5 py-5 w-full items-center space-x-3"
              >
                <Image
                  src="/icons/PencilIcon.svg"
                  height={30}
                  width={30}
                  alt="menu"
                />
                <p className="text-neutral800  group-hover:text-blue">
                  Penandatanganan Dokumen
                </p>
              </a>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
