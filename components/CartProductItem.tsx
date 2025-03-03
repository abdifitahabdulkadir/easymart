import { ProductType } from "@/types/types";
import Image from "next/image";
import IncrmenetDecrementCart from "./IncrmenetDecrementCart";

export default function CartProductItem({
  item: { imageUrl, quantity: itemQnty, name, id, currentPrice },
}: {
  item: ProductType;
}) {
  return (
    <div className="grid h-[7rem] w-full grid-cols-4 place-content-center gap-x-2 rounded-[4px] border px-1 py-8 shadow-md shadow-gray-100">
      <div className="flex w-full items-center gap-x-3">
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="cart item image"
          loading="eager"
          priority
          className="size-[2rem] md:size-[4rem]"
        />
        <h6 className="flex w-full items-center justify-center text-[.5rem] font-normal sm:text-[.7rem]">
          {name}
        </h6>
      </div>
      <h5 className="flex w-full items-center justify-center">
        {`INR. ${currentPrice}`}
      </h5>

      <IncrmenetDecrementCart
        itemQnty={itemQnty || 0}
        id={id}
        currentPrice={currentPrice || 0}
      />
    </div>
  );
}
