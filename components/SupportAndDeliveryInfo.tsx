import { popois } from "@/lib/font";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { MdArrowUpward } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";

const items = [
  {
    id: "caed18f7-c595-4ce7-8447-1c6b4f48eb7f",
    name: "FREE AND FAST DELIVERY",
    des: "Free delivery for all orders over $140",
    icon: (
      <TbTruckDelivery className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-teritiaryOrangeColor" />
    ),
  },
  {
    id: "825a9bd5-fb4a-49a1-a436-68286c229dc2",
    name: "24/7 CUSTOMER SERVICE",
    des: "Friendly 24/7 customer support",
    icon: (
      <BiSupport className="transition-all duration-300 group-hover:scale-[1.4] group-hover:text-teritiaryOrangeColor" />
    ),
  },
  {
    id: "6da5722c-c0a5-4e5c-897d-b603d1d2f50e",
    name: "MONEY BACK GUARANTEE",
    des: "We return money within 30 days",
    icon: (
      <SiAdguard className="transition-all duration-300 group-hover:scale-[1.4] group-hover:text-teritiaryOrangeColor" />
    ),
  },
];

export default function SupportAndDeliveryInfo({
  showArrow = true,
}: {
  showArrow?: boolean;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center md:items-end">
      <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-6 py-10 md:justify-between">
        {items.map(({ name, id, des, icon }) => {
          return (
            <div
              key={id}
              className={`flex flex-col items-center justify-center ${popois.className}`}
            >
              <div className="group flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-[#2F2E30] bg-opacity-30">
                <div className="flex h-[70%] w-[70%] items-center justify-center rounded-full bg-black text-white">
                  {icon}
                </div>
              </div>
              <h3 className={`text-[.9rem] font-semibold`}>{name}</h3>
              <p className="text-[.6rem] font-normal">{des}</p>
            </div>
          );
        })}
      </div>
      {showArrow && (
        <Link href={"#main"}>
          <div className="group flex cursor-pointer items-center justify-center rounded-full bg-secondaryWhiteColorOne p-2 hover:bg-secondaryWhiteColorOne">
            <MdArrowUpward className="duration-400 transition-all group-hover:text-teritiaryOrangeColor" />
          </div>
        </Link>
      )}
    </div>
  );
}
