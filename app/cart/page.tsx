import CartProductItem from "@/components/CartProductItem";
import { bestSellingProducts } from "@/lib";
import { popois } from "@/lib/font";
import { AiFillProduct } from "react-icons/ai";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function CartPage() {
  return (
    <div className="w-full  flex flex-col mt-10 px-2 md:px-10 items-center justify-center  gap-y-6">
      <p className="flex w-full items-center gap-x-2 flex-wrap gap-y-3">
        <span className="text-black/30 ">home /</span> Cart
      </p>

      <div className="grid gap-x-2 grid-cols-4 h-10 shadow-md  rounded-[4px] bg-secondaryWhiteColorThree  gap-3  w-full">
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
      <div className="w-full flex flex-col gap-y-4 mt-10">
        {bestSellingProducts.map((item, index) => {
          return <CartProductItem key={index} item={item} />;
        })}
      </div>

      <div className="flex w-full items-center justify-between mt-10 gap-x-3">
        <button className="border w-[10rem] px-3 lg:px-7 p-1 border-black/30 flex items-center justify-center hover:bg-secondaryLightGraryColor duration-300 transition-all text-sm line-clamp-1 lg:text-lg cursor-pointer rounded-[4px] lg:w-fit">
          Return To Shop
        </button>
        <button className="border w-[10rem]  px-3 lg:px-7 p-1 border-black/30 flex items-center justify-center hover:bg-secondaryLightGraryColor duration-300 transition-all text-sm line-clamp-1 lg:text-lg cursor-pointer rounded-[4px] lg:w-fit">
          Update The Cart
        </button>
      </div>

      <div className="w-full flex justify-between gap-y-3 flex-col md:flex-row items-start mt-10 ">
        <div className="flex w-full flex-col lg:flex-row gap-y-2 items-center gap-x-6">
          <input
            type="text"
            placeholder="Coupon Code"
            className="px-4 py-3 outline-none focus:border-teritiaryGreenColor    rounded-[4px] border-2 border-black"
          />
          <button className="px-4 py-3 bg-teritiaryOrangeColor text-white flex items-center justify-center rounded-[4px] hover:bg-teritiaryGreenColor  transition-all duration-300">
            Apply Coupon Code
          </button>
        </div>
        <div className="w-full md:w-[24rem] h-fit flex   flex-col gap-y-4 rounded-[4px] border border-black text-black py-6 px-4 ">
          <h4 className={`${popois.className} font-medium text-[1.2rem] `}>
            Cart Total
          </h4>
          <CartSubTotalItemBuilder text="Subtotal:" value="$1750" />
          <CartSubTotalItemBuilder text="Shipping:" value="free" />
          <CartSubTotalItemBuilder
            text="Total:"
            value="$1750"
            includeBorder={false}
          />
          <button className="px-2 py-3 bg-teritiaryOrangeColor text-white flex items-center justify-center rounded-[4px] hover:bg-teritiaryGreenColor text-[.6rem]  transition-all duration-300">
            Proceed To Checkout
          </button>
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
    <div className="w-full h-full flex items-center justify-center gap-x-2">
      {children}
      <h3
        className={`${popois.className} font-normal tex-xs line-clamp-1 md:text-[1rem] hidden sm:block`}
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
      className={`w-full flex items-center justify-between py-2 px-1  ${
        includeBorder && "border-b-2 border-black/30"
      }`}
    >
      <span className={`${popois.className} font-normal text-[.8rem]`}>
        {text}
      </span>
      <span className={`${popois.className} font-semibold text-[.8rem]`}>
        {value}
      </span>
    </div>
  );
}
