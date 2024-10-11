import { interFont } from "@/lib/font";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuGamepad } from "react-icons/lu";
import { PiHeadphones } from "react-icons/pi";
import DoubleArrows from "./DoubleArrows";
import SectionTitleGenerator from "./Titles";

const categores = [
  {
    id: 1,
    name: "Phones",
    icon: (
      <FiSmartphone className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
    ),
    isSelected: false,
  },
  {
    id: 2,
    name: "Computers",
    icon: (
      <HiOutlineComputerDesktop className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white  group-hover:-rotate-45" />
    ),
    isSelected: false,
  },
  {
    id: 3,
    name: "SmartWatch",
    icon: (
      <BsSmartwatch className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
    ),
    isSelected: false,
  },
  {
    id: 4,
    name: "Cameras",
    icon: (
      <CiCamera className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white group-hover:-rotate-45" />
    ),
    isSelected: true,
  },
  {
    id: 5,
    name: "HeadPhones",
    icon: (
      <PiHeadphones className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white group-hover:rotate-45" />
    ),
    isSelected: false,
  },
  {
    id: 5,
    name: "Gaming",
    icon: (
      <LuGamepad className="w-8 h-8 group-hover:-translate-y-2 group-hover:scale-[1.3] transition-all duration-300 group-hover:text-white group-hover:-rotate-45" />
    ),
    isSelected: false,
  },
];
export default function Categories() {
  return (
    <div
      className={`w-full py-20 flex flex-col   items-center border-b border-gray-300 ${interFont.className}`}
    >
      <SectionTitleGenerator
        primaryText={"Categories"}
        secondaryText={"Browse By Category"}
      >
        <DoubleArrows />
      </SectionTitleGenerator>

      {/* cateories items*/}
      <div className="flex items-center gap-y-4 flex-wrap lg:flex-nowrap justify-between w-full mt-8 gap-x-4 px-5 md:px-3">
        {categores.map(({ id, name, icon, isSelected }) => {
          return (
            <div
              key={id}
              className={`border-2  cursor-pointer min-w-fit min-h-fit w-40 h-40 items-center justify-center flex flex-col gap-y-2  rounded-[4px] border-black/20 hover:bg-teritiaryOrangeColor  transition-all  duration-300 group hover:border-none  ${
                isSelected && " bg-teritiaryOrangeColor text-white border-none"
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
