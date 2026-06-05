"use client";

import { convertToPersianDigits } from "@/utils/converToPersianDigits";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HoverModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="relative inline-block select-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {children}
        {isOpen && (
          <div
            className={`absolute -bottom-3 left-0 translate-y-full mt-1 w-80 bg-white shadow-lg rounded-md border border-first-3 z-50 overflow-auto p-2 text-center transition-all duration-300 ${
              isOpen
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <span className="block pb-1.5 text-slate-600 border-b border-slate-300">
              سبد خرید
            </span>
            <div className="py-3">
              {/* <span className="block py-2 bg-red-200 text-red-800 rounded">
                سبد خرید خالی است.
              </span> */}
              <div className="flex items-center py-1 px-2 hover:bg-first-4 rounded transition-all duration-150">
                <Image
                  className="me-1"
                  src={"/images/perf1.png"}
                  alt="Cart_Item"
                  width={50}
                  height={50}
                />
                <div className="w-full flex flex-col">
                  <span className="w-full text-slate-600 text-start line-clamp-1 text-sm">
                    شنل پلاتینیوم گرید A
                  </span>
                </div>
                <button><FontAwesomeIcon icon={faXmark} className="text-red-500 text-sm"/></button>
              </div>
              <div></div>
              <div className="flex items-center py-1 px-2 hover:bg-first-4 rounded transition-all duration-150">
                <Image
                  className="me-1"
                  src={"/images/perf2.png"}
                  alt="Cart_Item"
                  width={50}
                  height={50}
                />
                <div className="w-full flex flex-col">
                  <span className="w-full text-slate-600 text-start line-clamp-1 text-sm">
                    شنل پلاتینیوم گرید A
                  </span>
                </div>
                <button><FontAwesomeIcon icon={faXmark} className="text-red-500 text-sm"/></button>
              </div>
            </div>
            <div className="w-full border-t border-slate-300">
              <span className="block py-2 text-slate-700">
                مجموع : {convertToPersianDigits(1250000, true)} تومان
              </span>
              <Link href={"/cart"}>
                <button className="block w-full py-2 bg-first hover:bg-orange-800 text-white rounded transition-all duration-150">
                  ثبت سفارش
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HoverModal;
