import { flashItems } from "@/lib";
import { interFont } from "@/lib/font";
import Link from "next/link";
import DoubleArrows from "./DoubleArrows";
import ProductItem from "./ProductItem";
import { FlashItemsTimer } from "./Timers";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

export default function FlashSales() {
  return (
    <div
      className={`flex w-full flex-col items-center border-b border-gray-300 py-20 ${interFont.className}`}
    >
      <div className="flex w-full flex-col gap-y-3">
        <PrimaryTitleGenerator title={"Today's"} />
        <div className="grid w-full grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between">
          <SecondaryTitleGenerator
            className="col-span-1"
            title={"Flash Sales"}
          />
          <DoubleArrows className="order-2 col-span-1 lg:order-3" />
          <FlashItemsTimer className="order-3 col-span-2 w-full lg:order-none lg:col-span-1 lg:w-auto" />
        </div>
      </div>

      <div className="grid w-full gap-x-3 gap-y-2 px-10 py-5 md:grid-cols-2 md:px-3 lg:grid-cols-4">
        {flashItems.map((item, index) => {
          return (
            <ProductItem
              categoryName="flash-Products"
              key={index}
              item={item}
              priceRatingClassName="flex flex-row lg:flex-col gap-y-1 gap-x-3 w-full justify-around"
            />
          );
        })}
      </div>

      {/* view all button */}
      <Link
        href={"/products/flashItems?name=Flash Sales"}
        className="mt-10 bg-teritiaryOrangeColor px-3 py-2 text-white transition-all duration-500 hover:scale-x-[1.12] hover:bg-secondaryLightGraryColor hover:text-black hover:shadow-lg"
      >
        View All Products
      </Link>
    </div>
  );
}
