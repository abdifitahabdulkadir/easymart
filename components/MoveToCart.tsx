"use client";

import { addToCart } from "@/lib/cart.action";
import { useSession } from "next-auth/react";
import { useTransition } from "react";
import { toast } from "react-toastify";

interface MoveToCartProps {
  items:
    | {
        productId: string;
        categoryName: string;
        price: number;
      }[]
    | undefined;
}
export default function MoveToCart({ items }: MoveToCartProps) {
  const session = useSession();
  const [isAddingToCart, startTransition] = useTransition();

  function handleAddToCart() {
    if (!session.data) {
      toast("You need to logic to make such changes", { type: "warning" });
      return;
    }

    if (items === undefined || !items.length) return;
    startTransition(async () => {
      try {
        for (const { categoryName, productId, price } of items) {
          await addToCart({
            productId,
            categoryName,
            price,
          });
        }
        toast("Successfully moved items to the cart", { type: "success" });
      } catch (error) {
        console.log(error);
        toast("Failed to add to cart", { type: "error" });
      }
    });
  }
  return (
    <button
      disabled={isAddingToCart}
      onClick={handleAddToCart}
      className="flex cursor-pointer items-center justify-center rounded-[4px] border border-black/30 px-3 py-2 transition-all duration-200 hover:bg-secondaryLightGraryColor hover:text-black"
    >
      {isAddingToCart ? "moving...." : "Move All To Cat"}
    </button>
  );
}
