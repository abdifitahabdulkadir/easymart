import ProductItem from "@/components/ProductItem";
import { PrimaryTitleGenerator } from "@/components/Titles";
import { exploreProducts, wishlistProducts } from "@/lib";

export default function page() {
  return (
    <div className="w-full py-10 flex flex-col gap-y-10 items-center justify-center px-10">
      <div className="w-full flex items-center justify-between">
        <h6 className="font-normal text-black/90 ">WishList (4) </h6>
        <button className="px-3 py-2 rounded-[4px] border border-black/30 flex items-center justify-center hover:bg-secondaryLightGraryColor hover:text-black transition-all duration-200 cursor-pointer">
          Move All To Bag
        </button>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-3">
        {wishlistProducts.map((item, index) => {
          return <ProductItem item={item} key={index} />;
        })}
      </div>

      {/* recommendations */}
      <div className="flex w-full gap-y-3 justify-between mt-10">
        <PrimaryTitleGenerator title={"Just For you"} />
        <button className="border w-[10rem] px-3 p-1 border-black/30 flex items-center justify-center hover:bg-secondaryLightGraryColor duration-300 transition-all cursor-pointer">
          See All
        </button>
      </div>

      <div className="grid md:grid-cols-3 place-items-center px-10 md:px-3 lg:grid-cols-4 py-5 gap-x-3 gap-y-3 w-full">
        {exploreProducts.map((item, index) => {
          if (index > 3) return <ProductItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
