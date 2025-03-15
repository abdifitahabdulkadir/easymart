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

  async function updateCartQuantity(operationType: "increment" | "decrement") {
    try {
      setTimeout(async () => {
        await incrmentDecrementCart({
          productId: id,
          operationType: operationType,
        });
      }, 2000);
    } catch {
      toast("Failed to Incrmenet/Decremnt cart item", {
        type: "error",
      });
    }
  }

  return (
    <>
      <div className="w-full">
        <div className="relative h-[44px] rounded-[4px]">
          <input
            type="text"
            placeholder="01"
            disabled={true}
            onChange={(e) => setQuantity(Number(e.target.value))}
            value={quantity}
            max={10}
            min={1}
            className="h-full w-full rounded-[4px] border-[1.5px] border-black/40 px-2 text-black outline-none"
          />
          <RxCaretUp
            name="inc"
            onClick={() => {
              setQuantity((prev: number) => prev + 1);
              updateCartQuantity("increment");
            }}
            className="absolute right-1 top-1 scale-[1.4] cursor-pointer transition-colors duration-200 hover:text-teritiaryOrangeColor"
          />
          <RxCaretDown
            name="dec"
            onClick={() => {
              setQuantity((prev: number) => (prev - 1 < 1 ? 0 : prev - 1));
              updateCartQuantity("decrement");
            }}
            className="absolute bottom-1 right-1 scale-[1.4] cursor-pointer transition-colors duration-200 hover:text-teritiaryOrangeColor"
          />
        </div>
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
