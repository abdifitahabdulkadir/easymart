import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";

export function PrimaryTitleGenerator({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex  flex-col   gap-x-3 ${className}`}>
      <div className="flex items-center gap-x-2 text-teritiaryOrangeColor">
        <div className="w-[20px] h-[40px] bg-teritiaryOrangeColor rounded-[4px]"></div>
        <h4 className=" leading-9 p-1 font-semibold">{title}</h4>
      </div>
    </div>
  );
}

export function SecondaryTitleGenerator({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-x-3 items-center space-x-16  ${className}`}
    >
      <h2 className="font-semibold text-[2rem] lg:text-[2.4rem]">{title}</h2>
    </div>
  );
}

export default function SectionTitleGenerator({
  primaryText,
  secondaryText,
}: {
  primaryText: string;
  secondaryText: string;
}) {
  return (
    <div className="flex flex-col items-start w-full">
      <PrimaryTitleGenerator title={primaryText} className="px-3" />
      <div className=" px-4 grid grid-cols-2  w-full">
        <SecondaryTitleGenerator title={secondaryText} />
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
  );
}
