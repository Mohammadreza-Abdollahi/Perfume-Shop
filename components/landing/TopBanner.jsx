import Image from "next/image";

const TopBanner = () => {
  return (
    <>
      <section className="w-full relative -mb-3">
        <div className="inline-block w-1/5 h-screen bg-white"></div>
        <div className="inline-block w-4/5 h-screen bg-linear-to-br from-first-4 to-white"></div>
        <section className="container flex justify-center items-center absolute -translate-y-1/2 translate-x-1/2 top-1/2 right-1/2">
          <div className="flex-1/2">
            <div className="flex items-center">
              <div className="flex">
                <Image
                  className="w-12"
                  src={"/images/banner_av1.png"}
                  alt="Banner_Av"
                  width={47}
                  height={47}
                />
                <Image
                  className="translate-x-3 w-12"
                  src={"/images/banner_av2.png"}
                  alt="Banner_Av"
                  width={47}
                  height={47}
                />
                <Image
                  className="translate-x-6 w-12"
                  src={"/images/banner_av3.png"}
                  alt="Banner_Av"
                  width={47}
                  height={47}
                />
              </div>
              <div className="inline-block dana-bold px-5 py-3 border border-slate-500 rounded-full">
                بیش از{" "}
                <span className="bg-first text-white rounded-full px-3 py-0.5">
                  2 هزار
                </span>{" "}
                خریدار ثابت
              </div>
            </div>
            <div className="my-8">
              <h1 className="lalezar text-6xl my-3 text-slate-800">
                برای هر روزت
              </h1>
              <h1 className="lalezar text-6xl my-3 text-slate-800">
                بهترین عطر رو انتخاب کن
              </h1>
              <span className="block mt-8 text-slate-700 text-xl pl-20">
                هر قطره، بازتابی از ظرافت، جذابیت و شخصیت بی‌همتای شما؛ برای
                تقویت اعتماد به نفس و برانگیختن حواس.
              </span>
            </div>
            <div>
              <button className="bg-first hover:bg-orange-700 text-white p-3 rounded-full transition-all duration-150 cursor-pointer">
                مشاهده محصولات
                <Image
                  className="inline-block mx-2"
                  src={"/icons/perfume.png"}
                  alt="Btn_Icon"
                  width={22}
                  height={22}
                />
              </button>
            </div>
          </div>
          <div className="flex-1/2 bg-[url(/images/banner_cloud.png)] bg-cover">
            <Image
              className="mx-auto"
              src={"/images/banner.png"}
              alt="Top_Banner"
              width={597}
              height={584}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default TopBanner;
