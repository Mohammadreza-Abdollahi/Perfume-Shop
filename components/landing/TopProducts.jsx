import { convertToPersianDigits } from "@/utils/converToPersianDigits";
import Image from "next/image";

const TopProducts = () => {
  return <>
    <section className="container mx-auto my-[100px] flex">
        <div className="flex-1/4 pt-32">
            <span className="block lalezar text-4xl my-1.5">انتخاب <span className="text-first lalezar">بهترین ها</span>
            </span>
            <span className="block lalezar text-4xl my-1.5">برای شما</span>
            <p className="pe-30 text-slate-700 mt-1.5 block">ما هر هفته بهترین و پرفروش ترین محصولاتمان را به شما پیشنهاد میدهیم.</p>
        </div>
        <div className="flex-3/4 gap-8">
            <div className="w-[290px] mx-8 inline-block">
                <section className="flex items-center justify-center bg-linear-to-br from-first/30 to-white rounded-3xl">
                    <Image src={"/images/perf5.png"} alt="Perf_1" width={277} height={331}/>
                </section>
                <section className="my-5">
                    <div className="flex justify-between items-center">
                        <span className="align-middle text-2xl text-start block line-clamp-1"><b>شنل پلاتینیوم</b></span>
                        <span className=" px-2.5 rounded-full text-end bg-first text-white">{convertToPersianDigits(13500000,true)} <Image className="inline-block" src={"/icons/tooman.png"} alt="Toman_icon" width={35} height={35}/></span>
                    </div>
                    <p className="block text-slate-600 text-start mt-2">رایحه ای خنک، گیاهی، تلخ، سبز و شاداب با حس تمیز و صابونی مانند</p>
                    <button className="flex items-center justify-between border border-slate-400 rounded-full mt-5 group cursor-pointer"><span className="mx-3.5">افزودن به سبد خرید</span><span className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-first group-hover:bg-orange-700 transition-all duration-150"><Image src={"/icons/cart.png"} alt="Cart-Icon" width={18} height={18}/></span></button>
                </section>
            </div>
            <div className="w-[290px] mx-8 inline-block">
                <section className="flex items-center justify-center bg-linear-to-br from-first/30 to-white rounded-3xl">
                    <Image src={"/images/perf3.png"} alt="Perf_1" width={277} height={331}/>
                </section>
                <section className="my-5">
                    <div className="flex justify-between items-center">
                        <span className="align-middle text-2xl text-start block line-clamp-1"><b>شنل پلاتینیوم</b></span>
                        <span className=" px-2.5 rounded-full text-end bg-first text-white">{convertToPersianDigits(13500000,true)} <Image className="inline-block" src={"/icons/tooman.png"} alt="Toman_icon" width={35} height={35}/></span>
                    </div>
                    <p className="block text-slate-600 text-start mt-2">رایحه ای خنک، گیاهی، تلخ، سبز و شاداب با حس تمیز و صابونی مانند</p>
                    <button className="flex items-center justify-between border border-slate-400 rounded-full mt-5 group cursor-pointer"><span className="mx-3.5">افزودن به سبد خرید</span><span className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-first group-hover:bg-orange-700 transition-all duration-150"><Image src={"/icons/cart.png"} alt="Cart-Icon" width={18} height={18}/></span></button>
                </section>
            </div>
            <div className="w-[290px] mx-8 inline-block">
                <section className="flex items-center justify-center bg-linear-to-br from-first/30 to-white rounded-3xl">
                    <Image src={"/images/perf8.png"} alt="Perf_1" width={277} height={331}/>
                </section>
                <section className="my-5">
                    <div className="flex justify-between items-center">
                        <span className="align-middle text-2xl text-start block line-clamp-1"><b>شنل پلاتینیوم</b></span>
                        <span className=" px-2.5 rounded-full text-end bg-first text-white">{convertToPersianDigits(13500000,true)} <Image className="inline-block" src={"/icons/tooman.png"} alt="Toman_icon" width={35} height={35}/></span>
                    </div>
                    <p className="block text-slate-600 text-start mt-2">رایحه ای خنک، گیاهی، تلخ، سبز و شاداب با حس تمیز و صابونی مانند</p>
                    <button className="flex items-center justify-between border border-slate-400 rounded-full mt-5 group cursor-pointer"><span className="mx-3.5">افزودن به سبد خرید</span><span className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-first group-hover:bg-orange-700 transition-all duration-150"><Image src={"/icons/cart.png"} alt="Cart-Icon" width={18} height={18}/></span></button>
                </section>
            </div>
        </div>
    </section>
  </>;
};

export default TopProducts;
