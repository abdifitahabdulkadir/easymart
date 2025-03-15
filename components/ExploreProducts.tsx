import { exploreProducts } from "@/lib/index";
import Link from "next/link";
import DoubleArrows from "./DoubleArrows";
import ProductItem from "./ProductItem";
import { PrimaryTitleGenerator, SecondaryTitleGenerator } from "./Titles";

export default function ExploreProducts({ query }: { query: string }) {
  return (
    <div className="flex min-w-full flex-col items-center justify-center py-10">
      <div className="mb-5 flex w-full flex-col justify-start gap-y-4">
        <PrimaryTitleGenerator title="Our Products" />
        <div className="flex w-full items-center justify-between gap-x-3">
          <SecondaryTitleGenerator title="Explore Our Products" />
          <DoubleArrows />
        </div>
      </div>
      <div className="mt-7 grid w-full grid-cols-1 gap-4 px-10 sm:grid-cols-2 sm:px-4 md:grid-cols-3 lg:grid-cols-4 lg:px-0">
        {exploreProducts
          .filter((item) =>
            query === undefined
              ? item
              : item.name.toLowerCase().includes(query?.toLowerCase() ?? ""),
          )
          .map((item) => {
            return (
              <ProductItem
                categoryName="explore"
                key={item.id}
                item={item}
                priceRatingClassName="grid grid-cols-[1fr_4fr] gap-x-1 "
              />
            );
          })}
      </div>
      {/* view all button */}
      <Link
        href={"/products/exploreProducts"}
        className="mt-10 bg-teritiaryOrangeColor p-2 text-white transition-all duration-500 hover:scale-x-[1.12] hover:bg-secondaryLightGraryColor hover:text-black hover:shadow-lg"
      >
        View All Products
      </Link>
    </div>
  );
}
