import MoveToCart from "@/components/MoveToCart";
import ProductItem from "@/components/ProductItem";
import { PrimaryTitleGenerator } from "@/components/Titles";
import { exploreProducts } from "@/lib";
import { decodeProductCategory } from "@/lib/util";
import { getWishlistsItems } from "@/lib/wishlist.action";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const { data } = await getWishlistsItems();
  if (data === undefined || !data.length)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Image
          src={"/wishlist-emtpy.svg"}
          width={300}
          height={300}
          alt="wishlist empty state illustration"
          className="object-contain"
        />
        <p className="tex-sm px-3 text-center font-bold text-primaryGrayColor md:text-xl lg:text-2xl">
          Huury up! to get your favorite item and bring here.
        </p>
        <Link
          href={"/"}
          className="mt-6 cursor-pointer rounded-md bg-starColor px-5 py-2 text-white transition-all duration-200 hover:scale-x-[1.4] hover:bg-opacity-90"
        >
          Shop Now
        </Link>
      </div>
    );
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-10 px-10 py-10">
      <div className="flex w-full items-center justify-between">
        <h6 className="font-normal text-black/90">
          WishList
          <span className="font-bold italic">
            ({data !== undefined ? data.length : null})
          </span>
        </h6>
        <MoveToCart items={data ?? []} />
      </div>
      <div className="grid w-full place-items-center gap-x-3 gap-y-3 px-10 py-5 md:grid-cols-3 md:px-3 lg:grid-cols-4">
        {data !== undefined &&
          data?.map(
            ({
              categoryName,
              productId,
              quantity,
            }: {
              categoryName: string;
              productId: string;
              quantity: number;
            }) => {
              const productCategory = decodeProductCategory(categoryName);
              return productCategory
                .filter((item) => item.id === productId)
                .map((current) => {
                  current.quantity = quantity;
                  return (
                    <ProductItem
                      showDeleteIcon
                      categoryName={categoryName}
                      item={current}
                      key={current.id}
                    />
                  );
                });
            },
          )}
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
