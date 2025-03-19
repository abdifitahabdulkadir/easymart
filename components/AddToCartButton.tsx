"use client";

import { addToCart } from "@/lib/cart.action";
import { useSession } from "next-auth/react";
import { useTransition } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

interface AddToCartProps {
  productId: string;
  categoryName: string;
  showIcon?: boolean;
  price: number;
}

export default function AddToCartButton({
  showIcon,
  productId,
  categoryName,
  price,
}: AddToCartProps) {
  const [isTransitioning, startTransition] = useTransition();
  const session = useSession();

  function handleAddToCart() {
    if (!session.data) {
      toast(
        "You need to authenticated to make such changes or Refersh if you have logged In soon",
        {
          type: "warning",
        },
      );
      return;
    }
    startTransition(async () => {
      const result = await addToCart({
        productId,
        categoryName,
        price,
      });
      if (result?.success) {
        toast("Item added to cart", { type: "success" });
        return;
      }
      toast(result?.message, { type: "error" });
    });
  }
  return (
    <button
      onClick={handleAddToCart}
      disabled={isTransitioning}
      className="flex w-full cursor-pointer items-center justify-center gap-x-3 rounded-lg bg-black px-1 py-2 text-[0.5rem] font-semibold text-white transition-all duration-300 hover:bg-secondaryLightGraryColor hover:text-black"
    >
      {isTransitioning
        ? "Processing..."
        : showIcon && <FaShoppingCart className="scale-[2.4]" /> &&
          "Add to Cart"}
    </button>
  );
}
