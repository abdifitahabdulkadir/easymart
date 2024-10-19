import { popois } from "@/lib/font";
import React from "react";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
const deliverAndReturnPolicy = [
  {
    icon: <TbTruckDelivery className="scale-[2] text-black/90" />,
    title: "Free Delivery",
    des: "Enter your postal code for Delivery Availability",
  },
  {
    icon: <FaArrowsRotate className="scale-[2] text-black/90" />,
    title: "Return Delivery",
    des: "Free 30 Days Delivery Returns. Details",
  },
];
export default function ProductItemDescrption() {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <h3>Havic HV G-92 Gamepad</h3>
      <div className="flex w-full items-center gap-x-2">
        <div className="flex items-center gap-x-1">
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <FaStar
                key={index}
                className={`h-3 w-3 ${index !== 4 ? "text-starColor" : "text-black/20"}`}
              />
            );
          })}
        </div>
        <span className="font-normal text-black/30">(150 Reviews)</span>
        <span className="text-black/20">|</span>
        <span className="text-teritiaryGreenColor">In Stock</span>
      </div>
      <p className="font-semibold">$192.00</p>
      <p className="mt-3 font-normal text-black/70">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
      <div className="mt-4 w-full rounded-[3px] border-b-2 border-black/30"></div>
      <div className="mt-4 flex w-full items-center gap-x-2">
        <span className="me-4 font-normal"> Colors:</span>
        <div
          className={`h-4 w-4 cursor-pointer rounded-full bg-[#A0BCE0] transition-all duration-150 hover:scale-[1.2] hover:border-2 hover:border-green-600`}
        ></div>
        <div
          className={`h-4 w-4 cursor-pointer rounded-full bg-[#E07575] transition-all duration-150 hover:scale-[1.2] hover:border-2 hover:border-green-600`}
        ></div>
      </div>
      {/* sizes */}
      <div className="flex w-full items-center gap-x-2">
        <span className="me-4 font-normal"> Size:</span>
        {["XS", "S", "M", "L", "XL"].map((item, index) => {
          return (
            <span
              className={`flex h-[42px] w-[42px] items-center justify-center rounded-[4px] border border-black/20 ${popois.className} font-meduim cursor-pointer transition-all duration-200 hover:bg-teritiaryOrangeColor hover:text-white ${index === 2 && "bg-teritiaryOrangeColor text-white"}`}
              key={index}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className="mt-7 grid w-full grid-cols-[2fr_2fr_1fr] gap-x-2">
        {/* increasing /decreasing item number */}
        <div className="grid w-full grid-cols-[1fr_2fr_1fr] divide-x divide-black/30 rounded-[4px] border border-black/30">
          <button className="flex h-full w-full items-center justify-center px-3 py-2 transition-all duration-300 hover:bg-teritiaryOrangeColor hover:text-white">
            <FaMinus />
          </button>
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-center font-bold">1</span>
          </div>
          <button className="flex h-full w-full items-center justify-center px-3 py-2 transition-all duration-300 hover:bg-teritiaryOrangeColor hover:text-white">
            <FaPlus />
          </button>
        </div>

        {/* buy and add to the favorites button */}
        <button className="rounded-[4px] bg-teritiaryOrangeColor px-3 py-2 text-center text-white transition-colors duration-300 hover:bg-secondaryLightGraryColor hover:text-black">
          Buy Now
        </button>
        {/* add the */}
        <button className="group flex w-[80%] items-center justify-center rounded-[4px] border border-black/30 py-2 text-black/70">
          <GrFavorite className="scale-[1.6] transition-colors duration-300 group-hover:text-teritiaryOrangeColor" />
        </button>
      </div>

      {/* return and delivery  */}
      <div className="mt-4 flex w-full flex-col items-center gap-y-4 rounded-[4px] border-2 border-black/30">
        {deliverAndReturnPolicy.map(({ icon, title, des }, index) => {
          return (
            <div
              key={index}
              className={`flex w-full items-center justify-center gap-x-4 px-5 ${index === 0 && "border-b border-black/30 py-5"} ${index == 1 && "pb-5"} `}
            >
              {icon}
              <div className="flex w-full flex-col justify-center gap-y-1">
                <h5>{title}</h5>
                <p>{des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
