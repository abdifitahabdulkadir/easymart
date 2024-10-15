import { popois } from "@/lib/font";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { MdArrowUpward } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";

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
    des: "We return money within 30 days",
    icon: (
      <SiAdguard className="group-hover:scale-[1.4]  group-hover:text-teritiaryOrangeColor transition-all duration-300 " />
    ),
  },
];

export default function SupportAndDeliveryInfo({
  showArrow = true,
}: {
  showArrow?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center  md:items-end w-full">
      <div className="w-full gap-y-6 gap-x-3 flex-wrap flex items-center md:justify-between justify-center mt-10 py-10">
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
      {showArrow && (
        <Link href={"#main"}>
          <div className="p-2 bg-secondaryWhiteColorOne flex items-center justify-center rounded-full hover:bg-secondaryWhiteColorOne  group cursor-pointer">
            <MdArrowUpward className="group-hover:text-teritiaryOrangeColor transition-all duration-400" />
          </div>
        </Link>
      )}
    </div>
  );
}
