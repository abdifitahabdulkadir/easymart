import FetchCarts from "@/components/FetchCarts";
import { popois } from "@/lib/font";
import Link from "next/link";
import { Suspense } from "react";
import { AiFillProduct } from "react-icons/ai";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { PropagateLoader } from "react-spinners";
export default async function CartPage() {
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

      <Suspense
        fallback={
          <div className="flex h-[20rem] w-full items-center justify-center">
            <PropagateLoader size={30} color="#00FF66" />
          </div>
        }
      >
        <FetchCarts />
        <Link
          href={"/checkout"}
          className="flex items-center justify-center rounded-[4px] bg-teritiaryOrangeColor px-2 py-3 text-[.6rem] text-white transition-all duration-300 hover:bg-teritiaryGreenColor"
        >
          Proceed To Checkout
        </Link>
      </Suspense>
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
