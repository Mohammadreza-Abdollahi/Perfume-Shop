import { convertToPersianDigits } from "@/utils/converToPersianDigits";
import {
  faBoxOpen,
  faSquareCheck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = () => {
  return (
    <>
      <section className="container mx-auto pt-32">
        <div className="flex gap-8 bg-gray-100 rounded-2xl mb-5 px-5 py-3">
          <Link
            className="hover:text-first transition-all duration-150"
            href={"/"}
          >
            <span>خانه</span>
          </Link>
          <span>\</span>
          <Link
            className="hover:text-first transition-all duration-150"
            href={"/shop"}
          >
            فروشگاه
          </Link>
          <span>\</span>
          <Link
            className="hover:text-first transition-all duration-150"
            href={"/shop/1"}
          >
            شنل پلاتینیوم
          </Link>
          <br />
        </div>
        <div className="flex gap-6">
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
            <section className="bg-gray-100 rounded-2xl p-5 py-4 mt-5">
              <section className="my-6">
                <h3 className="text-xl text-slate-800 my-1">
                  <b>معرفی:</b>
                </h3>
                <p className="text-justify text-slate-700">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </section>
              <br />
              <section className="my-6">
                <h4 className="text-xl text-slate-800 my-1">
                  <b>مشخصات:</b>
                </h4>
                <table className="w-3/4 mx-auto my-5">
                  <tbody>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        سایز
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        100 میل
                      </td>
                    </tr>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        طبع
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        شیرین
                      </td>
                    </tr>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        گروه بویایی
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        چوبی مشک گل
                      </td>
                    </tr>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        عطار
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        ژاک پولجه
                      </td>
                    </tr>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        جنسیت
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        مردانه
                      </td>
                    </tr>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        نوع عطر
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        ادو تویلت
                      </td>
                    </tr>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        فصل
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        فصول گرم
                      </td>
                    </tr>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        ماندگاری
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        بسیار خوب
                      </td>
                    </tr>
                    <tr className="odd:bg-first/20 hover:bg-first/25 transition-all duration-150 cursor-default">
                      <td className="w-1/4 px-3 py-1.5 text-slate-900 rounded-s-lg">
                        پراکندگی
                      </td>
                      <td className="w-3/4 px-3 py-1.5 text-slate-800 rounded-e-lg">
                        خوب
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </section>
          </div>
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
