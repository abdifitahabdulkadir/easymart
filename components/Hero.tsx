import Image from "next/image";
import Link from "next/link";
import { FaAppleAlt } from "react-icons/fa";
import { HiArrowSmallRight } from "react-icons/hi2";
import HeroSidebar from "./HeroSidebar";

export default function Hero() {
  return (
    <div className="grid h-full min-h-fit w-full grid-cols-1 lg:grid-cols-[20%_1fr]">
      <HeroSidebar />
      <div className="h-full w-full overflow-hidden px-2 pt-5">
        <div className="grid h-full w-full grid-cols-1 place-items-center justify-center bg-black px-5 pt-5 md:grid-cols-[1fr_1fr] lg:px-10">
          {/* text information */}
          <div className="flex h-full flex-col items-start justify-around text-white">
            <div className="mt-4 flex items-center justify-around gap-x-2 lg:mt-0">
              <FaAppleAlt className="h-[20px] w-[20px] md:h-[40px] md:w-[40px]" />
              <span className="font-light">iPhone 14 Series</span>
            </div>
            <h1 className="lg:text-2.5rem] mt-4 line-clamp-1 text-[14px] font-normal md:line-clamp-2 md:text-[2rem] md:tracking-widest lg:mt-0">
              Up to 10% off Voucher
            </h1>
            <div className="group mt-4 flex items-center gap-x-2 transition-all duration-200 hover:translate-x-3 lg:mt-0">
              <Link
                href={""}
                className="border-b-[1.2px] border-white pb-1 text-xs text-white hover:text-teritiaryLightOrangeColor md:font-semibold"
              >
                ShopNow
              </Link>
              <HiArrowSmallRight className="scale-[1.4] transition-colors duration-200 group-hover:text-teritiaryLightOrangeColor" />
            </div>
          </div>
          {/* image */}
          <div className="mt-4 flex h-full w-full items-center justify-center lg:mt-0 lg:pt-6">
            <Image
              src={"/heroImages/iphone.svg"}
              width={100}
              priority
              height={100}
              alt="hero image"
              className="h-full w-full"
            />
          </div>

          {/* slider dots */}
          <div className="col-span-full mb-5 flex h-full w-full items-end justify-center gap-x-3">
            {Array.from({ length: 5 }, (_, index: number) => {
              return (
                <div
                  key={index}
                  className="h-[12px] w-[12px] cursor-pointer rounded-full bg-primaryWhiteColor transition-all duration-300 hover:scale-[1.4] hover:border hover:border-white hover:bg-teritiaryOrangeColor"
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
