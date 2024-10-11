import { bestSellingProducts } from "@/lib";
import { interFont } from "@/lib/font";
import ProductItem from "./ProductItem";
import SectionTitleGenerator from "./Titles";

export default function BestSellingProducts() {
  return (
    <div
      className={`w-full py-20 flex flex-col   items-center border-b border-gray-300 ${interFont.className}`}
    >
      <SectionTitleGenerator
        primaryText={"This Month"}
        secondaryText={"Best Selling Products"}
      />

      <div className="grid md:grid-cols-3 place-items-center px-10 md:px-3 lg:grid-cols-4 py-5 gap-x-3 gap-y-3 w-full">
        {bestSellingProducts.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
