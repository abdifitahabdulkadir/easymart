import Link from "next/link";
import { RxCaretDown } from "react-icons/rx";
export default function Announcement() {
  return (
    <div className="h-[48px] gap-x-4  w-full bg-black px-3  justify-center   flex items-center ">
      <div className="w-[80%] flex items-center justify-center gap-x-4 gap-y-2 ">
        <p className="text-white  text-xs line-clamp-1  font-normal md:text-[14px]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link
          href={""}
          className="text-white underline font-semibold hover:text-teritiaryLightOrangeColor transition-colors duration-200"
        >
          ShopNow
        </Link>
      </div>
      <button className="text-white hover:text-teritiaryLightOrangeColor transition-colors duration-200 flex gap-0 items-center">
        <span> English</span>
        <RxCaretDown className=" ms-1 scale-[1.4] " />
      </button>
    </div>
  );
}
