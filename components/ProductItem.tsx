import { getCartItems } from "@/lib/cart.action";
import { getWishlistsItems } from "@/lib/wishlist.action";
import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder, MdRemoveRedEye } from "react-icons/md";
import AddToCartButton from "./AddToCartButton";
import AddToWishList from "./AddToWishList";
import DeleteProduct from "./DeleteProduct";

function decoder(items: [], id: string) {
  const check = items?.filter(
    (item: { productId: string; ownerId: string }) => item.productId === id,
  )[0];
  return check === undefined ? false : check["productId"] === id;
}

export default async function ProductItem({
  item: {
    name,
    imageUrl,
    soldTimes,
    discount,
    id,
    isNew,
    rating,
    currentPrice,
    originalPrice,
    colors,
  },
  categoryName,
  priceRatingClassName,
  showDeleteIcon = false,
}: {
  item: ProductType;
  categoryName: string;
  priceRatingClassName?: string;
  showDeleteIcon?: boolean;
}) {
  const [cart, wishlist] = await Promise.allSettled([
    getCartItems(),
    getWishlistsItems(),
  ]);
  const isAddedToCart =
    cart.status === "fulfilled" ? decoder(cart.value.data, id) : false;
  const isAddedToWishlist =
    wishlist.status === "fulfilled" ? decoder(wishlist.value.data, id) : false;
  return (
    <div
      className={`flex max-h-fit min-h-60 w-full cursor-pointer flex-col rounded-[4px] bg-white shadow-sm shadow-secondaryWhiteColorThree ${
        !isAddedToWishlist &&
        !isAddedToCart &&
        "transition-scale duration-300 hover:scale-[1.02]"
      }`}
    >
      <div className="relative flex h-40 items-center justify-center rounded-[4px] bg-secondaryWhiteColorOne px-5 py-4">
        {discount && (
          <div className="absolute left-2 top-2 flex h-[26px] w-fit items-center justify-center rounded-[4px] bg-teritiaryOrangeColor px-4 text-xs font-light italic text-white">
            <span>{`-INR. ${discount}%`}</span>
          </div>
        )}
        {isNew && (
          <div className="absolute left-2 top-2 flex h-[26px] w-[55px] items-center justify-center rounded-[4px] bg-teritiaryGreenColor text-xs font-light italic text-white">
            <span>New</span>
          </div>
        )}

        <Link
          href={`/products/${categoryName}`}
          className="h-[6rem] w-[60%] pb-3"
        >
          <Image
            src={imageUrl}
            height={100}
            priority
            loading="eager"
            alt="image of item"
            width={100}
            className="h-full w-full"
          />
        </Link>

        {!showDeleteIcon && (
          <div className="absolute right-2 top-2 flex h-fit flex-col items-center justify-around gap-y-2">
            <div className="group flex cursor-pointer items-center justify-center rounded-full bg-white p-2 text-gray-500 hover:bg-secondaryWhiteColorTwo">
              <MdFavoriteBorder
                name="add Favorites"
                className="transition-all duration-500 group-hover:scale-[1.12]"
              />
            </div>
            <div className="group flex cursor-pointer items-center justify-center rounded-full bg-white p-2 text-gray-500 hover:bg-secondaryWhiteColorTwo">
              <MdRemoveRedEye
                name="hide"
                className="transition-all duration-500 group-hover:scale-[1.12]"
              />
            </div>
          </div>
        )}

        {showDeleteIcon && (
          <div className="absolute right-2 top-2 flex h-fit flex-col items-center justify-around gap-y-2">
            <div className="group flex cursor-pointer items-center justify-center rounded-full bg-white p-2 text-gray-500 hover:bg-secondaryWhiteColorTwo">
              <DeleteProduct productId={id} />
            </div>
          </div>
        )}

        <div className="absolute bottom-1 flex w-full items-center gap-x-2 px-3">
          {!isAddedToCart && (
            <AddToCartButton
              price={currentPrice || originalPrice}
              productId={id}
              categoryName={categoryName}
              showIcon={true}
            />
          )}
          {!isAddedToWishlist && (
            <AddToWishList
              productId={id}
              price={currentPrice || originalPrice}
              categoryName={categoryName}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-1 py-3 pl-1">
        <div className="flex items-start gap-y-2">
          <h3 className="line-clamp-1 w-full text-base font-medium text-black">
            {name}
          </h3>
        </div>
        <div className={`${priceRatingClassName}`}>
          <div className="flex items-center gap-x-4 text-base">
            {currentPrice !== 0 && (
              <span className="text-teritiaryOrangeColor">{`INR. ${currentPrice}`}</span>
            )}

            {originalPrice !== 0 && !isAddedToWishlist && (
              <span className="text-primaryGrayColorTwo line-through">{`INR. ${originalPrice}`}</span>
            )}
          </div>

          {!isAddedToWishlist && (
            <div className={`flex items-center gap-x-2`}>
              <div className="flex items-center gap-x-1">
                {Array.from({ length: rating }, (_, index) => {
                  return (
                    <FaStar key={index} className="h-3 w-3 text-starColor" />
                  );
                })}
              </div>
              <span className="text-primaryGrayColorTwo">{`(INR. ${soldTimes})`}</span>
            </div>
          )}
        </div>
        {colors && (
          <div className="flex items-center gap-x-1">
            {colors?.map((color) => {
              return (
                <div
                  style={{
                    backgroundColor: color,
                  }}
                  key={color}
                  className={`h-4 w-4 cursor-pointer rounded-full transition-all duration-150 hover:scale-[1.2] hover:border-2 hover:border-green-600`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
