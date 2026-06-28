import { faKey, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <section className="h-screen flex justify-center">
        <div className="flex-1/2 flex justify-center items-center relative bg-first/10">
          <section className="w-1/2 mx-auto">
            <div className="mb-6">
              <h1 className="lalezar text-slate-800 text-4xl text-center mb-3">
                ورود
              </h1>
              <span className="block text-center text-slate-600 mb-3">
                اطلاعات حساب کاربری خود را به درستی وارد کنید.
              </span>
            </div>
            <div className="relative my-5">
              <input
                className="w-full outline-none border text-lg border-first/30 focus:border-first bg-white rounded-xl py-3.5 pr-36 text-slate-800 transition-all duration-150"
                type="text"
                name="phone"
                id="phone"
              />
              <label
                className="absolute top-1/2 right-3 flex gap-2.5 items-center -translate-y-1/2 text-slate-600"
                htmlFor="phone"
              >
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="w-6 text-first inline-block"
                />
                <span>شماره همراه:</span>
              </label>
            </div>
            <div className="relative my-5">
              <input
                className="w-full outline-none border text-lg border-first/30 focus:border-first bg-white rounded-xl py-3.5 pr-36 text-slate-800 transition-all duration-150"
                type="password"
                name="password"
                id="password"
              />
              <label
                className="absolute top-1/2 right-3 flex gap-2.5 items-center -translate-y-1/2 text-slate-600"
                htmlFor="password"
              >
                <FontAwesomeIcon
                  icon={faKey}
                  className="w-6 text-first inline-block"
                />
                <span>رمز عبور :</span>
              </label>
            </div>
            <div className="my-5 px-2">
              <span className="text-slate-700">
                حساب کاربری ندارید؟{" "}
                <Link className="text-first" href={"/auth/register"}>
                  ثبت نام
                </Link>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <button className="px-6 py-3 bg-linear-to-r from-first/65 to-first hover:bg-first text-white rounded-2xl cursor-pointer transition-all duration-150">
                ورود
              </button>
            </div>
          </section>
        </div>
        <div className="flex-1/2 flex justify-center items-center bg-[url(/images/login_back.svg)] bg-no-repeat bg-cover">
          <div className="bg-white/30 border border-white backdrop-blur-sm w-1/2 h-2/3 rounded-3xl relative">
            <Image
              className="absolute bottom-20 left-1/2 -translate-x-1/2"
              src={"/images/login_man.png"}
              alt="Login_Vector"
              width={380}
              height={440}
            />
            <div className="absolute right-0 bottom-1/3 translate-x-1/2 w-16 h-16 flex justify-center items-center rounded-full bg-white">
              <Image
                src={"/icons/thunder.png"}
                alt="Login_Vector"
                width={42}
                height={42}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
