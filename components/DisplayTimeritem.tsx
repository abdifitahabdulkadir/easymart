import { TbDotsVertical } from "react-icons/tb";
interface ProsType {
  title: string;
  value: number;
  isLastOne: boolean;
  className?: string;
  showDotSeperator?: boolean;
}
export default function DisplayTimerItemValue({
  title,
  value,
  isLastOne,
  className,
  showDotSeperator = true,
}: ProsType) {
  return (
    <div className={`flex items-center  gap-x-5 mb-2 ${className}`}>
      <div className="flex flex-col items-center justify-around">
        <span className="font-light text-gray-600">{title}</span>
        <h4 className=" font-bold text-[1rem] lg:text-[1.5rem] ">
          {`${value < 9 ? `0${value}` : value}`}
        </h4>
      </div>

      {!isLastOne && showDotSeperator && (
        <TbDotsVertical className="text-teritiaryOrangeColor mt-5" />
      )}
    </div>
  );
}
