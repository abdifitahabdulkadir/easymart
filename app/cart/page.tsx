"use client";

import CartProductItem from "@/components/CartProductItem";
import { bestSellingProducts, exploreProducts, flashItems } from "@/lib";
import { getCartItems } from "@/lib/cart.action";
import { popois } from "@/lib/font";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { AiFillProduct } from "react-icons/ai";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import PropagateLoader from "react-spinners/PropagateLoader";
function decodeProductCategory(categoryName: string) {
  switch (categoryName) {
    case "flash-Products":
      return flashItems;
    case "best-Selling":
      return bestSellingProducts;
    case "explore":
      return exploreProducts;
    default:
      return flashItems;
  }
}

export default function CartPage() {
  const [data, setData] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isFetching, setFetching] = useTransition();

  useEffect(function () {
    setFetching(async () => {
      const { success, data } = await getCartItems();
      if (success) {
        setData(data);
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (data !== undefined) {
        const sum = data?.reduce(
          (
            prev: number,
            { price, quantity }: { price: number; quantity: number },
          ) => {
            return prev + price * quantity;
          },
          0,
        );
        if (sum !== totalPrice) setTotalPrice(sum);
      }
    }, 2000);
  }, [data, totalPrice]);

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-y-6 px-2 md:px-10">
      <p className="flex w-full flex-wrap items-center gap-x-2 gap-y-3">
        <Link className="text-black/30" href="/">
          home
        </Link>
        /Cart
      </p>

      <div className="grid h-10 w-full grid-cols-4 gap-3 gap-x-2 rounded-[4px] bg-secondaryWhiteColorThree shadow-md">
        <TabBuilder text="Product">
          <AiFillProduct title="Product" />
        </TabBuilder>
        <TabBuilder text="Price">
          <RiMoneyDollarCircleFill title="Price" />
        </TabBuilder>
        <TabBuilder text="Quantity">
          <BsGrid1X2Fill title="Quantity" />
        </TabBuilder>
        <TabBuilder text="Subtotal">
          <RiMoneyDollarCircleFill title="Subtotal" />
        </TabBuilder>
      </div>
      <div className="mt-10 flex w-full flex-col gap-y-4">
        {isFetching && (
          <div className="flex items-center justify-center">
            <PropagateLoader size={30} color="#00FF66" />
          </div>
        )}

        {!isFetching &&
          data !== undefined &&
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
            value={String(`$ ${totalPrice}`)}
          />
          <CartSubTotalItemBuilder text="Shipping:" value="free" />
          <CartSubTotalItemBuilder
            text="Total:"
            value={String(`$ ${totalPrice}`)}
            includeBorder={false}
          />
          <Link
            href={"/checkout"}
            className="flex items-center justify-center rounded-[4px] bg-teritiaryOrangeColor px-2 py-3 text-[.6rem] text-white transition-all duration-300 hover:bg-teritiaryGreenColor"
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

function TabBuilder({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center gap-x-2">
      {children}
      <h3
        className={`${popois.className} tex-xs line-clamp-1 hidden font-normal sm:block md:text-[1rem]`}
      >
        {text}
      </h3>
    </div>
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
