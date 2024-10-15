import { ProductType } from "@/types/types";
import Image from "next/image";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

export default function CartProductItem({
  item: { imageUrl, name, currentPrice },
}: {
  item: ProductType;
}) {
  return (
    <div className="grid grid-cols-4 w-full gap-x-3 h-[7rem] shadow-md shadow-gray-100 py-8   place-content-center rounded-[4px] px-1">
      <div className="flex items-center gap-x-3  w-full">
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="cart item image"
          loading="eager"
          priority
          className="w-[2rem] h-[rem] md:w-[4rem] md:h-[4rem]"
        />
        <h6 className="font-normal text-[.5rem] sm:text-[.7rem] w-full flex items-center justify-center ">
          {name}
        </h6>
      </div>
      <h5 className="w-full flex items-center justify-center">
        {`$${currentPrice}`}
      </h5>

      <form action="" className="w-[72px] h-[44px] rounded-[4px] relative">
        <input
          type="text"
          placeholder="01"
          max={10}
          min={1}
          className="border-[1.5px] border-black/40 text-black  rounded-[4px] outline-none w-full h-full px-2"
        />
        <RxCaretUp className="absolute top-1 right-1 cursor-pointer hover:text-teritiaryOrangeColor duration-200 transition-colors" />
        <RxCaretDown className="absolute bottom-1 right-1 cursor-pointer hover:text-teritiaryOrangeColor duration-200 transition-colors" />
      </form>

      <h5 className="w-full flex items-center justify-center">{`$500`}</h5>
    </div>
  );
}
