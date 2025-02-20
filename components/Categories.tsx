import { interFont } from "@/lib/font";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuGamepad } from "react-icons/lu";
import { PiHeadphones } from "react-icons/pi";
import DoubleArrows from "./DoubleArrows";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

const categores = [
  {
    id: 1,
    name: "Phones",
    icon: (
      <FiSmartphone className="h-8 w-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-45 group-hover:scale-[1.3] group-hover:text-white" />
    ),
    isSelected: false,
  },
  {
    id: 2,
    name: "Computers",
    icon: (
      <HiOutlineComputerDesktop className="h-8 w-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-45 group-hover:scale-[1.3] group-hover:text-white" />
    ),
    isSelected: false,
  },
  {
    id: 3,
    name: "SmartWatch",
    icon: (
      <BsSmartwatch className="h-8 w-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-45 group-hover:scale-[1.3] group-hover:text-white" />
    ),
    isSelected: false,
  },
  {
    id: 4,
    name: "Cameras",
    icon: (
      <CiCamera className="h-8 w-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-45 group-hover:scale-[1.3] group-hover:text-white" />
    ),
    isSelected: true,
  },
  {
    id: 5,
    name: "HeadPhones",
    icon: (
      <PiHeadphones className="h-8 w-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-45 group-hover:scale-[1.3] group-hover:text-white" />
    ),
    isSelected: false,
  },
  {
    id: 6,
    name: "Gaming",
    icon: (
      <LuGamepad className="h-8 w-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-45 group-hover:scale-[1.3] group-hover:text-white" />
    ),
    isSelected: false,
  },
];
export default function Categories() {
  return (
    <div
      className={`flex w-full flex-col items-center border-b border-gray-300 py-20 ${interFont.className}`}
    >
      <div className="flex w-full flex-col gap-y-3">
        <PrimaryTitleGenerator title={"Categories"} />
        <div className="flex w-full items-center justify-between">
          <SecondaryTitleGenerator title={"Browse By Category"} />
          <DoubleArrows />
        </div>
      </div>

      {/* cateories items*/}
      <div className="mt-8 grid w-full grid-cols-2 flex-wrap items-center gap-x-3 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {categores.map(({ name, icon, isSelected }, index) => {
          return (
            <div
              key={String(name + index)}
              className={`group flex h-40 min-h-fit min-w-fit cursor-pointer flex-col items-center justify-center gap-y-2 rounded-[4px] border-2 border-black/20 transition-all duration-300 hover:border-none hover:bg-teritiaryOrangeColor ${
                isSelected && "border-none bg-teritiaryOrangeColor text-white"
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
