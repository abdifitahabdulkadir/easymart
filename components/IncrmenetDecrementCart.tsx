"use client";

import { incrmentDecrementCart } from "@/lib/cart.action";
import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { toast } from "react-toastify";
import DeleteProduct from "./DeleteProduct";

interface IncrmenetDPros {
  itemQnty: number;
  id: string;
  currentPrice: number;
}
export default function IncrmenetDecrementCart({
  itemQnty,
  id,
  currentPrice,
}: IncrmenetDPros) {
  const [quantity, setQuantity] = useState(itemQnty || 0);

  async function updateCartQuantity() {
    try {
      await incrmentDecrementCart(id);
    } catch {
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
    <>
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

      <div className="flex w-full items-center justify-center px-10">
        <h5 className="flex w-full items-center justify-center">
          {`INR. ${currentPrice && currentPrice * quantity}`}
        </h5>
        <DeleteProduct productId={id} />
      </div>
    </>
  );
}
