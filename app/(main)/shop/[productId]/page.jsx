import { convertToPersianDigits } from "@/utils/converToPersianDigits";
import { faBoxOpen, faCheckCircle, faSquareCheck, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const SingleProduct = () => {
  return (
    <>
      <section className="container mx-auto pt-32">
        <div className="bg-gray-100 rounded-2xl mb-5 py-3">
          <br />
        </div>
        <div className="flex gap-6">
          {/* محتوای اصلی */}
          <div className="w-2/3">
            <section className="flex bg-gray-100 rounded-2xl">
              <div className="flex-1/3 p-2">
                <Image
                  className="bg-white rounded-xl"
                  src={"/images/perf2.png"}
                  alt="Product_Image"
                  width={310}
                  height={305}
                />
              </div>
              <div className="flex-2/3 p-2 py-10">
                <h1 className="text-3xl lalezar text-slate-800 line-clamp-1">
                  شنل پلاتینیوم
                </h1>
                <span className="block mt-5 mb-2 text-xl text-slate-700">
                  برند: Chanel
                </span>
                <span className="block mb-5 mt-2 text-xl text-slate-700">
                  گرید: A++
                </span>
                <span className="block mt-2 text-xl text-slate-700">
                  ویژگی ها:
                </span>
                <ul className="list-disc ps-5 text-slate-700">
                  <li>مردانه</li>
                  <li>رایحه شیرین</li>
                  <li>چوبی</li>
                  <li>فصول گرم</li>
                </ul>
              </div>
            </section>
            <section className="bg-gray-100 rounded-2xl p-2 mt-5">
              <br />
              <br />
              <br />
              <br />
            </section>
          </div>
          {/* سایدبار */}
          <div className="w-1/3">
            <div className="sticky top-15 bg-gray-100 rounded-2xl px-2 py-3">
              {/* <section className="flex items-center justify-center gap-3 text-2xl text-first line-through">
                  <b>{convertToPersianDigits(1250000, true)}</b>
                  <Image
                    src={"/icons/tooman2.png"}
                    alt="Tooman_Icon"
                    width={50}
                    height={50}
                  />
              </section> */}
              <section className="flex items-center justify-center gap-3 text-2xl">
                <b>{convertToPersianDigits(1250000, true)}</b>
                <Image
                  src={"/icons/tooman2.png"}
                  alt="Tooman_Icon"
                  width={50}
                  height={50}
                />
              </section>
              <section className="px-3 my-5">
              <div className="flex gap-3 my-3">
                  <FontAwesomeIcon
                    className="text-first w-6 text-lg"
                    icon={faBoxOpen}
                  />
                  <span>ضمانت سلامت فیزیکی کالا</span>
                </div>
                <div className="flex gap-3 my-3">
                  <FontAwesomeIcon
                    className="text-first w-6  text-lg"
                    icon={faSquareCheck}
                  />
                  <span>موجود در انبار</span>
                </div>
                <div className="flex gap-3 my-3">
                  <FontAwesomeIcon
                    className="text-first w-6  text-lg"
                    icon={faTruckFast}
                  />
                  <span>ارسال با پست</span>
                </div>
              </section>
              <button className="bg-first hover:bg-orange-700 w-full text-white text-lg py-2 rounded-lg mt-5 transition-all duration-150 cursor-pointer">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
