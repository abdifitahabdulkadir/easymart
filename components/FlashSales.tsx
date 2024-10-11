import { flashItems } from "@/lib";
import { interFont } from "@/lib/font";
import Button from "./Button";
import ProductItem from "./ProductItem";
import SectionTitleGenerator from "./Titles";

export default function FlashSales() {
  return (
    <div
      className={`w-full py-20 flex flex-col items-center  border-b border-gray-300   ${interFont.className}`}
    >
      <SectionTitleGenerator
        primaryText={"Today's"}
        secondaryText={"Flash Sales"}
      />
      <div className="grid md:grid-cols-3  lg:grid-cols-4 py-5 w-full gap-x-3 gap-y-2 px-10 md:px-3 ">
        {flashItems.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>

      {/* view all button */}
      <Button text="View All  Products" />
    </div>
  );
}
