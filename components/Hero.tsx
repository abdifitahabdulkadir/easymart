import Image from "next/image";
import Link from "next/link";
import { FaAppleAlt } from "react-icons/fa";
import { HiArrowSmallRight } from "react-icons/hi2";
import HeroSidebar from "./HeroSidebar";

export default function Hero() {
  return (
    <div className="grid grid-cols-1  min-h-fit lg:grid-cols-[20%_1fr]  w-full h-full">
      <HeroSidebar />
      <div className="w-full px-2  h-full pt-5 overflow-hidden ">
        <div className="w-full grid-cols-1 pt-5 grid md:grid-cols-[1fr_1fr] px-5 lg:px-10 justify-center place-items-center h-full bg-black ">
          {/* text information */}
          <div className="text-white  flex items-start flex-col h-full justify-around ">
            <div className="flex gap-x-2 items-center justify-around mt-4 lg:mt-0">
              <FaAppleAlt className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
              <span className="font-light ">iPhone 14 Series</span>
            </div>
            <h1 className="font-normal text-[14px]  line-clamp-1 md:text-[2rem] md:line-clamp-2 lg:text-2.5rem]  md:tracking-widest mt-4 lg:mt-0">
              Up to 10% off Voucher
            </h1>
            <div className="flex items-center gap-x-2 transition-all duration-200  hover:translate-x-3 group mt-4 lg:mt-0">
              <Link
                href={""}
                className="text-white text-xs border-b-[1.2px] pb-1 border-white  md:font-semibold hover:text-teritiaryLightOrangeColor "
              >
                ShopNow
              </Link>
              <HiArrowSmallRight className="scale-[1.4] group-hover:text-teritiaryLightOrangeColor transition-colors duration-200" />
            </div>
          </div>
          {/* image */}
          <div className="h-full flex mt-4 lg:mt-0  items-center justify-center w-full lg:pt-6">
            <Image
              src={"/heroImages/iphone.svg"}
              width={100}
              height={100}
              alt="hero image"
              className="w-full h-full"
            />
          </div>

          {/* slider dots */}
          <div className="flex h-full  mb-5 items-end gap-x-3 w-full  col-span-full justify-center">
            {Array.from({ length: 5 }, (index: number) => {
              return (
                <div
                  key={index}
                  className="w-[12px] h-[12px] rounded-full bg-primaryWhiteColor  hover:bg-teritiaryOrangeColor hover:border hover:border-white transition-all duration-300 hover:scale-[1.4] cursor-pointer"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
