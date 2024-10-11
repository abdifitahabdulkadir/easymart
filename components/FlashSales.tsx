import { flashItems } from "@/lib";
import { interFont } from "@/lib/font";
import Button from "./Button";
import DoubleArrows from "./DoubleArrows";
import ProductItem from "./ProductItem";
import { FlashItemsTimer } from "./Timers";
import SectionTitleGenerator from "./Titles";

export default function FlashSales() {
  return (
    <div
      className={`w-full py-20 flex flex-col items-center  border-b border-gray-300   ${interFont.className}`}
    >
      <SectionTitleGenerator
        primaryText={"Today's"}
        secondaryText={"Flash Sales"}
      >
        <FlashItemsTimer />
        <DoubleArrows />
      </SectionTitleGenerator>
      <div className="grid md:grid-cols-3  lg:grid-cols-4 py-5 w-full gap-x-3 gap-y-2 px-10 md:px-3 ">
        {flashItems.map((item) => {
          return (
            <ProductItem
              key={item.id}
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
