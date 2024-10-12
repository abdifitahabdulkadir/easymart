import { exploreProducts } from "@/lib";
import Button from "./Button";
import ProductItem from "./ProductItem";

export default function ExploreProducts() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full py-10 ">
      {/* <SectionTitleGenerator
        primaryText={"Our Products"}
        secondaryText={"Explore Our Products"}
      >
        <DoubleArrows />
      </SectionTitleGenerator> */}

      <div className="w-full grid grid-cols-1 px-10 sm:px-4 lg:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
        {exploreProducts.map((item) => {
          return (
            <ProductItem
              key={item.id}
              item={item}
              priceRatingClassName="grid grid-cols-[1fr_4fr] gap-x-1 "
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
