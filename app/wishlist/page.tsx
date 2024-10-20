import ProductItem from "@/components/ProductItem";
import { PrimaryTitleGenerator } from "@/components/Titles";
import { exploreProducts, wishlistProducts } from "@/lib";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-10 px-10 py-10">
      <div className="flex w-full items-center justify-between">
        <h6 className="font-normal text-black/90">WishList (4) </h6>
        <button className="flex cursor-pointer items-center justify-center rounded-[4px] border border-black/30 px-3 py-2 transition-all duration-200 hover:bg-secondaryLightGraryColor hover:text-black">
          Move All To Bag
        </button>
      </div>
      <div className="grid w-full grid-cols-2 gap-x-3 lg:grid-cols-4">
        {wishlistProducts.map((item, index) => {
          return <ProductItem categoryName="" item={item} key={index} />;
        })}
      </div>

      {/* recommendations */}
      <div className="mt-10 flex w-full justify-between gap-y-3">
        <PrimaryTitleGenerator title={"Just For you"} />
        <button className="flex w-[10rem] cursor-pointer items-center justify-center border border-black/30 p-1 px-3 transition-all duration-300 hover:bg-secondaryLightGraryColor">
          See All
        </button>
      </div>

      <div className="grid w-full place-items-center gap-x-3 gap-y-3 px-10 py-5 md:grid-cols-3 md:px-3 lg:grid-cols-4">
        {exploreProducts.map((item, index) => {
          if (index > 3)
            return <ProductItem categoryName="" key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
