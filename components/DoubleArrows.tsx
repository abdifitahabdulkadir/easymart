import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";

export default function DoubleArrows({ className }: { className?: string }) {
  return (
    <div
      className={`flex text-gray-500  justify-end  gap-x-2 items-center  h-full ${className}`}
    >
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
  );
}
