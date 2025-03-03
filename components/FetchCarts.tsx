import { getCartItems } from "@/lib/cart.action";
import { popois } from "@/lib/font";
import { decodeProductCategory } from "@/lib/util";
import Image from "next/image";
import Link from "next/link";
import CartProductItem from "./CartProductItem";

export default async function FetchCarts() {
  const { data } = await getCartItems();

  const totalPrice = (data as [])?.reduce(
    (
      prev: number,
      { price, quantity }: { price: number; quantity: number },
    ) => {
      return prev + price * quantity;
    },
    0,
  );
  if (data === undefined)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Image
          src={"/cart-empty.svg"}
          alt="cart image"
          width={300}
          height={300}
          quality={90}
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
    <>
      <div className="mt-10 flex w-full flex-col gap-y-4">
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
                  return <CartProductItem item={current} key={current.id} />;
                });
            },
          )}
      </div>

      <div className="mt-10 flex w-full items-center justify-between gap-x-3">
        <Link
          href={"/"}
          className="line-clamp-1 flex w-[10rem] cursor-pointer items-center justify-center rounded-[4px] border border-black/30 p-1 px-3 text-sm transition-all duration-300 hover:bg-secondaryLightGraryColor lg:w-fit lg:px-7 lg:text-lg"
        >
          Return To Shop
        </Link>
        <button className="line-clamp-1 flex w-[10rem] cursor-pointer items-center justify-center rounded-[4px] border border-black/30 p-1 px-3 text-sm transition-all duration-300 hover:bg-secondaryLightGraryColor lg:w-fit lg:px-7 lg:text-lg">
          Update The Cart
        </button>
      </div>

      <div className="mt-10 flex w-full flex-col items-start justify-between gap-y-3 md:flex-row">
        <div className="flex w-full flex-col items-center gap-x-6 gap-y-2 lg:flex-row">
          <input
            type="text"
            placeholder="Coupon Code"
            className="rounded-[4px] border-2 border-black px-4 py-3 outline-none focus:border-teritiaryGreenColor"
          />
          <button className="flex items-center justify-center rounded-[4px] bg-teritiaryOrangeColor px-4 py-3 text-white transition-all duration-300 hover:bg-teritiaryGreenColor">
            Apply Coupon Code
          </button>
        </div>
        <div className="flex h-fit w-full flex-col gap-y-4 rounded-[4px] border border-black px-4 py-6 text-black md:w-[24rem]">
          <h4 className={`${popois.className} text-[1.2rem] font-medium`}>
            Cart Total
          </h4>

          <CartSubTotalItemBuilder
            text="Subtotal:"
            value={String(`INR. ${totalPrice}`)}
          />
          <CartSubTotalItemBuilder text="Shipping:" value="free" />
          <CartSubTotalItemBuilder
            text="Total:"
            value={String(`INR. ${totalPrice}`)}
            includeBorder={false}
          />
        </div>
      </div>

      <Link
        href={"/checkout"}
        className="flex items-center justify-center rounded-[4px] bg-teritiaryOrangeColor px-2 py-3 text-[.6rem] text-white transition-all duration-300 hover:bg-teritiaryGreenColor"
      >
        Proceed To Checkout
      </Link>
    </>
  );
}

function CartSubTotalItemBuilder({
  text,
  value,
  includeBorder = true,
}: {
  text: string;
  value: string;
  includeBorder?: boolean;
}) {
  return (
    <div
      className={`flex w-full items-center justify-between px-1 py-2 ${
        includeBorder && "border-b-2 border-black/30"
      }`}
    >
      <span className={`${popois.className} text-[.8rem] font-normal`}>
        {text}
      </span>
      <span className={`${popois.className} text-[.8rem] font-semibold`}>
        {value}
      </span>
    </div>
  );
}
