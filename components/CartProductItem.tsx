import { incrmentDecrementCart } from "@/lib/cart.action";
import { ProductType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { toast } from "react-toastify";

export default function CartProductItem({
  item: { imageUrl, quantity: itemQnty, name, id, currentPrice },
}: {
  item: ProductType;
}) {
  const [quantity, setQuantity] = useState(itemQnty || 0);
  async function updateCartQuantity() {
    try {
      await incrmentDecrementCart(id);
    } catch (e) {
      console.log(e);
      toast("Failed to Incrmenet/Decremnt cart item", {
        type: "error",
      });
    }
  }
  function handleIncrementDec(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateCartQuantity();
  }

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
          className="h-[rem] w-[2rem] md:h-[4rem] md:w-[4rem]"
        />
        <h6 className="flex w-full items-center justify-center text-[.5rem] font-normal sm:text-[.7rem]">
          {name}
        </h6>
      </div>
      <h5 className="flex w-full items-center justify-center">
        {`$${currentPrice}`}
      </h5>

      <div className="w-full">
        <form
          onSubmit={handleIncrementDec}
          className="relative h-[44px] rounded-[4px]"
        >
          <input
            type="text"
            placeholder="01"
            onChange={(e) => setQuantity(Number(e.target.value))}
            value={quantity}
            max={10}
            min={1}
            className="h-full w-full rounded-[4px] border-[1.5px] border-black/40 px-2 text-black outline-none"
          />
          <RxCaretUp
            onClick={() => {
              setQuantity((prev: number) => prev + 1);
              updateCartQuantity();
            }}
            className="absolute right-1 top-1 scale-[1.4] cursor-pointer transition-colors duration-200 hover:text-teritiaryOrangeColor"
          />
          <RxCaretDown
            onClick={() => {
              setQuantity((prev: number) => (prev > 0 ? prev - 1 : 0));
              updateCartQuantity();
            }}
            className="absolute bottom-1 right-1 scale-[1.4] cursor-pointer transition-colors duration-200 hover:text-teritiaryOrangeColor"
          />
        </form>
      </div>

      <h5 className="flex w-full items-center justify-center">
        {`$${currentPrice && currentPrice * quantity}`}
      </h5>
    </div>
  );
}
