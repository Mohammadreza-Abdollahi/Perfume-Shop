import Image from "next/image";
import Link from "next/link";
import HoverModal from "../CartModal";

const Header = () => {
  return (
    <>
      <header className="container z-10 mx-auto absolute flex items-center justify-between top-7 right-1/2 translate-x-1/2">
        <div>
          <Image src={"/images/logo.png"} alt="Logo" width={49} height={40} />
        </div>
        <nav>
          <ul className="flex items-center gap-8 px-6 text-slate-700 py-3 border border-slate-500 rounded-full">
            <li className="hover:text-first transition-all duration-150 cursor-pointer">
              <Link href={"/"}>
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li className="hover:text-first transition-all duration-150 cursor-pointer">
              <Link href={"/shop"}>
                <span>فروشگاه</span>
              </Link>
            </li>
            <li className="hover:text-first transition-all duration-150 cursor-pointer">
              <Link href={"/about-us"}>
                <span>درباره ما</span>
              </Link>
            </li>
            <li className="hover:text-first transition-all duration-150 cursor-pointer">
              <Link href={"/contact-us"}>
                <span>تماس با ما</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <HoverModal>
            <div className="flex items-center border border-slate-500 rounded-full group cursor-pointer">
              <span className="text-slate-700 px-4">سبد خرید</span>
              <span className="block bg-first group-hover:bg-orange-700 p-3 rounded-full transition-all duration-150">
                <Image
                  className=""
                  src={"/icons/cart.png"}
                  alt="Cart"
                  width={18}
                  height={21}
                />
              </span>
            </div>
          </HoverModal>
        </div>
      </header>
    </>
  );
};

export default Header;
