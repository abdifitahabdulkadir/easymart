import { flashItems } from "@/lib";
import { Inter } from "next/font/google";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "./Button";
import ProductItem from "./ProductItem";
import Timer from "./Timer";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

const interFont = Inter({
  subsets: ["latin"],
});
export default function FlashSales() {
  return (
    <div
      className={`w-full py-20 flex flex-col items-center justify-center   ${interFont.className}`}
    >
      <div className="flex flex-col justify-center">
        <PrimaryTitleGenerator title={"Today's"} className=" px-3 lg:px-0" />
        <div className="w-full px-4 grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr]">
          <SecondaryTitleGenerator title="Flash Sales" />
          <Timer className="order-3 col-span-full justify-self-end lg:col-span-1 lg:order-2 " />
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

      <div className="grid md:grid-cols-3 place-items-center px-10 md:px-1 lg:grid-cols-4 py-5 gap-x-3 gap-y-3">
        {flashItems.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>

      {/* view all button */}
      <Button text="View All  Products" />
    </div>
  );
}
