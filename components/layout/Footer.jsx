import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto">
        <section className="flex p-20">
          <div className="bg-first text-white flex-1/2 py-7 px-5 rounded-2xl">
            <div className="w-full flex flex-col my-3">
              <label className="text-first-5" htmlFor="name">
                نام*
              </label>
              <input
                className="outline-none border-b border-first-3 py-1 px-3 text-xl"
                placeholder="محمدرضا عبداللهی"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="w-full flex flex-col my-3">
              <label className="text-first-5" htmlFor="email">
                ایمیل*
              </label>
              <input
                className="outline-none border-b border-first-3 py-1 px-3 text-xl"
                placeholder="mohammadreza@gmail.com"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="w-full flex flex-col my-3">
              <label className="text-first-5" htmlFor="message">
                پیغام شما
              </label>
              <textarea
                className="outline-none border-b border-first-3 py-1 px-3 text-xl"
                rows={4}
                name="message"
                id="message"
                placeholder="پیام شما..."
              ></textarea>
            </div>
            <div className="mt-5">
              <button className="flex items-center justify-between bg-white text-first hover:bg-first-5 py-3 px-4 rounded-full transition-all duration-150 cursor-pointer">
                <span>ارسال</span>
                <Image
                  className="mx-2"
                  src={"/icons/flesh.png"}
                  alt="Send_Icon"
                  width={12}
                  height={12}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-1/2 flex-col items-start justify-center gap-10 ps-44">
            <div className="flex items-center gap-7">
              <Image
                className="w-[58px] h-[51px]"
                src={"/icons/envelope.png"}
                alt="Envelope_Icon"
                width={59}
                height={51}
              />
              <div className="flex flex-col">
                <span className="text-slate-400 text-lg">پست الکترونیک</span>
                <span className="text-slate-700 text-2xl">
                  Perfume@shop.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <Image
                className="w-[55px] h-[70px]"
                src={"/icons/phone.png"}
                alt="Envelope_Icon"
                width={55}
                height={70}
              />
              <div className="flex flex-col">
                <span className="text-slate-400 text-lg">تلفن همراه</span>
                <span className="text-slate-700 text-xl">09035371148 (98+)</span>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <Image
                className="w-[48px] h-[69px]"
                src={"/icons/map.png"}
                alt="Envelope_Icon"
                width={48}
                height={69}
              />
              <div className="flex flex-col">
                <span className="text-slate-400 text-lg">دفتر</span>
                <span className="text-slate-700 text-lg w-72">
                  استان اصفهان ، خیابان طالقانی ، ارگ جهان نما ، طبقه همکف ،
                  پلاک 196
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-slate-400 py-20 flex justify-between items-center text-xl">
          <span>©2026 - تمامی حقوق محفوط میباشد</span>
          <Image className="w-[49px] h-[40px]" src={"/icons/logo.png"} alt="Footer_Logo" width={49} height={40}/>
          <span className="flex gap-5">
            <a className="hover:text-first transition-all duration-150" href="#">اینستاگرام</a>
            <span className="text-2xl">.</span>
            <a className="hover:text-first transition-all duration-150" href="#">تلگرام</a>
            <span className="text-2xl">.</span>
            <a className="hover:text-first transition-all duration-150" href="#">ایکس</a>
          </span>
        </section>
      </footer>
    </>
  );
};

export default Footer;
