import { ProductType } from "@/types/types";
import Image from "next/image";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

export default function CartProductItem({
  item: { imageUrl, name, currentPrice },
}: {
  item: ProductType;
}) {
  return (
    <div className="grid h-[7rem] w-full grid-cols-4 place-content-center gap-x-3 rounded-[4px] px-1 py-8 shadow-md shadow-gray-100">
      <div className="flex w-full items-center gap-x-3">
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="cart item image"
          loading="eager"
          priority
          className="h-[rem] w-[2rem] md:h-[4rem] md:w-[4rem]"
        />
        <h6 className="flex w-full items-center justify-center text-[.5rem] font-normal sm:text-[.7rem]">
          {name}
        </h6>
      </div>
      <h5 className="flex w-full items-center justify-center">
        {`$${currentPrice}`}
      </h5>

      <form action="" className="relative h-[44px] w-[72px] rounded-[4px]">
        <input
          type="text"
          placeholder="01"
          max={10}
          min={1}
          className="h-full w-full rounded-[4px] border-[1.5px] border-black/40 px-2 text-black outline-none"
        />
        <RxCaretUp className="absolute right-1 top-1 cursor-pointer transition-colors duration-200 hover:text-teritiaryOrangeColor" />
        <RxCaretDown className="absolute bottom-1 right-1 cursor-pointer transition-colors duration-200 hover:text-teritiaryOrangeColor" />
      </form>

      <h5 className="flex w-full items-center justify-center">{`$500`}</h5>
    </div>
  );
}
