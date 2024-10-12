import { interFont, popois } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { MdArrowUpward } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import NewArrivalItem from "./NewArrivalIem";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

const items = [
  {
    id: 1,
    name: "FREE AND FAST DELIVERY",
    des: "Free delivery for all orders over $140",
    icon: (
      <TbTruckDelivery className="group-hover:translate-x-1 group-hover:text-teritiaryOrangeColor transition-all duration-300 " />
    ),
  },
  {
    id: 2,
    name: "24/7 CUSTOMER SERVICE",
    des: "Friendly 24/7 customer support",
    icon: (
      <BiSupport className="group-hover:scale-[1.4] group-hover:text-teritiaryOrangeColor transition-all duration-300 " />
    ),
  },
  {
    id: 3,
    name: "MONEY BACK GUARANTEE",
    des: "We reurn money within 30 days",
    icon: (
      <SiAdguard className="group-hover:scale-[1.4]  group-hover:text-teritiaryOrangeColor transition-all duration-300 " />
    ),
  },
];
export default function NewArrivalProducts() {
  return (
    <div className="flex flex-col pb-20 h-full items-center justify-center min-w-full py-10 ">
      <div className="w-full flex flex-col justify-start gap-y-3 mb-5">
        <PrimaryTitleGenerator title="Featured" />
        <SecondaryTitleGenerator title="New Arrival" />
      </div>

      <div className="grid  py-30  lg:grid-cols-2 w-full gap-x-4 gap-y-3 h-lg:[26rem] h-full overflow-hidden ">
        <div className="w-full h-full bg-black  items-center flex justify-center rounded-[4px] relative">
          <Image
            src={"/featuredImages/playstation.svg"}
            width={100}
            height={100}
            loading="eager"
            alt="Playstation image"
            priority
            className=" w-full h-[70%] -mt-7 scale-[1.3] -mr-5 opacity-50"
          />
          <div className="flex flex-col gap-y-2 text-white absolute left-[10%] w-[60%] bottom-[7%]">
            <h4
              className={`${interFont.className} font-semibold text-sx lg:text-[1.23rem]`}
            >
              PlayStation 5
            </h4>
            <p
              className={`${popois.className} line-clamp-3 text-secondaryWhiteColorThree font-light text-[1rem]`}
            >
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href={""}
              className="text-white text-xs border-b-[1.2px] pb-1 border-white  md:font-semibold hover:text-teritiaryLightOrangeColor w-fit"
            >
              ShopNow
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-2 gap-x-2  ">
          <div className="w-full pb-6 col-span-full bg-black text-white grid grid-cols-[1fr_1fr] gap-x-3  rounded-[4px] ">
            <div className="flex flex-col px-5 gap-y-2 text-white  justify-center relative -bottom-2 py-10 lg:py-0">
              <h4
                className={`${interFont.className} font-semibold text-sx lg:text-[1.23rem]`}
              >
                Women’s Collections
              </h4>
              <p
                className={`${popois.className} line-clamp-2 text-secondaryWhiteColorThree font-light text-[0.8rem]`}
              >
                Featured woman collections that give you another vibe.
              </p>
              <Link
                href={""}
                className="text-white text-xs border-b-[1.2px] pb-1 border-white  md:font-semibold hover:text-teritiaryLightOrangeColor w-fit"
              >
                ShopNow
              </Link>
            </div>

            {/* image */}
            <div className="h-full w-full relative overflow-hidden">
              <Image
                src={"/featuredImages/back-women.svg"}
                height={100}
                width={100}
                alt="model image"
                loading="eager"
                priority
                className="h-full w-full  absolute scale-[1.5] -bottom-6 -left-8 rounded-[4px]"
              />
            </div>
          </div>
          <NewArrivalItem
            imageUrl={"/featuredImages/speaker.svg"}
            heading="Speakers"
            descrption="Amazon wireless speakers"
          />
          <NewArrivalItem
            imageUrl={"/featuredImages/perfume.svg"}
            heading="Perfume"
            descrption="GUCCI INTENSE OUD EDP"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  md:items-end w-full">
        <div className="w-[95%] gap-y-3 gap-x-3 flex-wrap flex items-center md:justify-between justify-center mt-10 py-10">
          {items.map(({ id, name, des, icon }) => {
            return (
              <div
                key={id}
                className={`flex flex-col items-center justify-center ${popois.className}`}
              >
                <div className="w-[3rem] cursor-pointer group h-[3rem] flex items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30 ">
                  <div className=" h-[70%] w-[70%] flex items-center justify-center rounded-full bg-black text-white">
                    {icon}
                  </div>
                </div>
                <h3 className={`font-semibold text-[.9rem]`}>{name}</h3>
                <p className="font-normal text-[.6rem]">{des}</p>
              </div>
            );
          })}
        </div>
        <Link href={"#main"}>
          <div className="p-2 bg-secondaryWhiteColorOne flex items-center justify-center rounded-full hover:bg-secondaryWhiteColorOne  group cursor-pointer">
            <MdArrowUpward className="group-hover:text-teritiaryOrangeColor transition-all duration-400" />
          </div>
        </Link>
      </div>
    </div>
  );
}
