import { interFont } from "@/lib/font";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import { PiHeadphones } from "react-icons/pi";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

const categores = [
  {
    id: 1,
    name: "Phones",
    icon: (
      <FiSmartphone className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white" />
    ),
    isSelected: false,
  },
  {
    id: 2,
    name: "Computers",
    icon: (
      <HiOutlineComputerDesktop className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white " />
    ),
    isSelected: false,
  },
  {
    id: 3,
    name: "SmartWatch",
    icon: (
      <BsSmartwatch className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white " />
    ),
    isSelected: false,
  },
  {
    id: 4,
    name: "Cameras",
    icon: (
      <CiCamera className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white " />
    ),
    isSelected: true,
  },
  {
    id: 5,
    name: "HeadPhones",
    icon: (
      <PiHeadphones className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white " />
    ),
    isSelected: false,
  },
  {
    id: 5,
    name: "Gaming",
    icon: (
      <LuGamepad className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white" />
    ),
    isSelected: false,
  },
];
export default function Categories() {
  return (
    <div
      className={`w-full py-20 flex flex-col  items-center border-b border-gray-300  ${interFont.className}`}
    >
      {/* titles */}
      <div className="flex flex-col items-start w-full">
        <PrimaryTitleGenerator title={"Categories"} className="px-3" />
        <div className=" px-4 grid grid-cols-2  w-full">
          <SecondaryTitleGenerator title="Browse By Category" />
          <div className="w-fit order-2 lg:order-3 flex text-gray-500 justify-self-end   gap-x-2 items-center justify-center h-full">
            <div className="p-2 bg-secondaryWhiteColorOne flex items-center justify-center rounded-full hover:bg-secondaryWhiteColorOne transition-all duration-200 group cursor-pointer">
              <IoArrowBackOutline
                name="backword"
                className="group-hover:scale-[1.12] duration-200  group-hover:text-teritiaryOrangeColor transition-all"
              />
            </div>
            <div className="p-2 bg-secondaryWhiteColorOne flex items-center justify-center rounded-full hover:bg-secondaryWhiteColorOne transition-all duration-200 group cursor-pointer">
              <IoMdArrowForward
                name="forward"
                className="group-hover:scale-[1.12] duration-200  group-hover:text-teritiaryOrangeColor transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* cateories itesm */}
      <div className="flex items-center gap-y-4 flex-wrap lg:flex-nowrap justify-between w-full mt-6 gap-x-4 px-5 md:px-0">
        {categores.map(({ id, name, icon, isSelected }) => {
          return (
            <div
              key={id}
              className={`border-2  cursor-pointer min-w-fit min-h-fit w-40 h-40 items-center justify-center flex flex-col gap-y-2  rounded-[4px] border-black/30 hover:bg-teritiaryOrangeColor  transition-all duration-300 group hover:border-none  ${
                isSelected
                  ? " bg-teritiaryOrangeColor text-white border-none"
                  : ""
              }`}
            >
              {icon}
              <h5 className="group-hover:text-white">{name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
