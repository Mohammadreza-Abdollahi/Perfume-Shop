import { convertToPersianDigits } from "@/utils/converToPersianDigits";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <section className="pt-52 container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-center text-2xl text-slate-800">محصولات</div>
          <div className="text-start text-2xl">
            <FontAwesomeIcon
              className="text-white bg-first py-2 px-1.5 rounded-full"
              icon={faFilter}
            />
          </div>
        </div>
        <div>
          <div className="w-[290px] mx-8 my-4 inline-block group">
            <section className="flex items-center justify-center bg-linear-to-br from-first/30 to-white rounded-3xl">
              <Image
                className="group-hover:scale-110 transition-all duration-150"
                src={"/images/perf5.png"}
                alt="Perf_1"
                width={277}
                height={331}
              />
            </section>
            <section className="my-5">
              <Link href={`/shop/${1}`}>
                <div className="flex justify-between items-center">
                  <span className="align-middle text-2xl text-start block line-clamp-1">
                    <b>شنل پلاتینیوم</b>
                  </span>
                  <span className=" px-2.5 rounded-full text-end bg-first text-white">
                    {convertToPersianDigits(13500000, true)}{" "}
                    <Image
                      className="inline-block"
                      src={"/icons/tooman.png"}
                      alt="Toman_icon"
                      width={35}
                      height={35}
                    />
                  </span>
                </div>
                <p className="block text-slate-600 text-start mt-2">
                  رایحه ای خنک، گیاهی، تلخ، سبز و شاداب با حس تمیز و صابونی
                  مانند
                </p>
              </Link>
              <button className="flex items-center justify-between border border-slate-400 rounded-full mt-5 group cursor-pointer">
                <span className="mx-3.5">افزودن به سبد خرید</span>
                <span className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-first group-hover:bg-orange-700 transition-all duration-150">
                  <Image
                    src={"/icons/cart.png"}
                    alt="Cart-Icon"
                    width={18}
                    height={18}
                  />
                </span>
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
