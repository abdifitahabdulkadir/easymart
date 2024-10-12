import { flashItems } from "@/lib";
import { interFont } from "@/lib/font";
import Button from "./Button";
import DoubleArrows from "./DoubleArrows";
import ProductItem from "./ProductItem";
import { FlashItemsTimer } from "./Timers";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

export default function FlashSales() {
  return (
    <div
      className={`w-full py-20 flex flex-col items-center  border-b border-gray-300   ${interFont.className}`}
    >
      <div className="flex w-full gap-y-3 flex-col">
        <PrimaryTitleGenerator title={"Today's"} />
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-x-3 gap-y-2">
          <SecondaryTitleGenerator
            className="col-span-1"
            title={"Flash Sales"}
          />
          <DoubleArrows className="col-span-1 order-2 lg:order-3" />
          <FlashItemsTimer className="col-span-2  lg:col-span-1 w-full order-3 lg:order-none lg:w-auto" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 py-5 w-full gap-x-3 gap-y-2 px-10 md:px-3 ">
        {flashItems.map((item, index) => {
          return (
            <ProductItem
              key={index}
              item={item}
              priceRatingClassName="flex flex-row lg:flex-col gap-y-1 gap-x-3 w-full justify-around"
            />
          );
        })}
      </div>

      {/* view all button */}
      <Button
        text="View All  Products"
        className="hover:bg-secondaryLightGraryColor hover:text-black transition-all duration-500 mt-10 hover:shadow-lg bg-teritiaryOrangeColor hover:scale-x-[1.12]"
      />
    </div>
  );
}
