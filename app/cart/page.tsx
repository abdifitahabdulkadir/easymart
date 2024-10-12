import CartProductItem from "@/components/CartProductItem";
import { bestSellingProducts } from "@/lib";
import { popois } from "@/lib/font";

export default function CartPage() {
  return (
    <div className="w-full  flex flex-col mt-10 px-10 items-center justify-center  gap-y-6">
      <div className="grid grid-cols-4 w-full gap-x-3 h-10 shadow-md  rounded-[4px] place-content-center bg-secondaryWhiteColorThree">
        <TabBuilder text="Product" />
        <TabBuilder text="Price" />
        <TabBuilder text="Quantity" />
        <TabBuilder text="Subtotal" />
      </div>
      <div className="w-full flex flex-col gap-y-4 mt-10">
        {bestSellingProducts.map((item, index) => {
          return <CartProductItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

function TabBuilder({ text }: { text: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <h3 className={`${popois.className} font-normal text-[1rem]`}>{text}</h3>
    </div>
  );
}
