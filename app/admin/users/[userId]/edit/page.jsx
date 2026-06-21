"use client";

import { useState } from "react";

const UserInfoPage = () => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isActive, setIsActive] = useState(true);
  const handleSave = async () => {

  };
  return (
    <>
      <form className="relative py-10">
        <section className="relative mb-6 px-2 py-8 mt-10 md:mt-3 bg-white rounded border border-slate-300 flex flex-col md:flex-row gap-12">
          <span className="absolute text-lg top-0 right-5 -translate-y-1/2 bg-white px-2 text-slate-800">
            اطلاعات شخصی
          </span>
          <div className="w-full md:w-1/3 flex justify-center md:justify-around items-center">
            <section className="relative w-full">
              <label
                className="absolute -top-3 right-3 text-slate-700 bg-white px-2"
                htmlFor={"phone"}
              >
                تلفن همراه
              </label>
              <input
                className="w-full text-slate-800 py-2.5 px-2 border-2 border-pal1-400 focus:border-pal4-600 rounded outline-none transition-all duration-150"
                type={"mobile"}
                name={"mobile"}
                id={"mobile"}
                placeholder={"لطفا تلفن همراه خود را وارد کنید..."}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </section>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-around items-center">
            <section className="relative w-full">
              <label
                className="absolute -top-3 right-3 text-slate-700 bg-white px-2"
                htmlFor={"email"}
              >
                ایمیل
              </label>
              <input
                className="w-full text-slate-800 py-2.5 px-2 border-2 border-pal1-400 focus:border-pal4-600 rounded outline-none transition-all duration-150"
                type={"email"}
                name={"email"}
                id={"email"}
                placeholder={"لطفا ایمیل خود را وارد کنید..."}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-around items-center">
            <section className="relative w-full">
              <label
                className="absolute -top-3 right-3 text-slate-700 bg-white px-2"
                htmlFor={"email"}
              >
                نام کاربری
              </label>
              <input
                className="w-full text-slate-800 py-2.5 px-2 border-2 border-pal1-400 focus:border-pal4-600 rounded outline-none transition-all duration-150"
                type={"text"}
                name={"username"}
                id={"username"}
                placeholder={"لطفا نام کاربری خود را وارد کنید..."}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </section>
          </div>
        </section>
        <section className="relative w-full flex justify-start items-center md:px-2">
          <input
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="appearance-none 
    w-5 h-5 mx-1 
    border-2 border-pal1-400 
    rounded
    cursor-pointer
    transition-all duration-150
    checked:bg-pal1-400
    checked:border-pal1-400"
            type={"checkbox"}
            name={"isActive"}
            id={"isActive"}
          />
          <label
            className="text-slate-700 bg-white px-2 cursor-pointer selection:bg-transparent"
            htmlFor={"isActive"}
          >
            {"فعال بودن کاربر"}
          </label>
        </section>
        {false && (
          <section className="flex items-center justify-start text-sm text-red-800 rounded bg-red-100 py-3 px-3 mt-5">
            <FontAwesomeIcon icon={faCircleNotch} className="mx-2" />
            <span></span>
          </section>
        )}
        {false && (
          <section className="flex items-center justify-start text-sm text-green-800 rounded bg-green-100 py-3 px-3 mt-5">
            <FontAwesomeIcon icon={faCheckCircle} className="mx-2" />
            <span></span>
          </section>
        )}
        <button
          type="submit"
          className="w-full py-2 mt-5 text-center text-white bg-pal2-500 hover:bg-pal2-600 disabled:opacity-60 disabled:hover:bg-pal2-500 disabled:cursor-not-allowed rounded transition-all duration-150"
        >
          ذخیره تغییرات
        </button>
      </form>
    </>
  );
};

export default UserInfoPage;
