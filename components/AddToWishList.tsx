"use client";

import { addToWishList } from "@/lib/wishlist.action";
import { useTransition } from "react";
import { toast } from "react-toastify";

interface AddToWishProps {
  productId: string;
  categoryName: string;
  showIcon?: boolean;
}
export default function AddToWishList({
  productId,
  categoryName,
}: AddToWishProps) {
  const [isTransitioning, startTransition] = useTransition();

  function handleAddToWishList() {
    startTransition(async () => {
      const result = await addToWishList({
        productId,
        categoryName,
      });
      if (result.success) {
        toast("Item added to cart", { type: "success" });
        return;
      }
      toast(result.message, { type: "error" });
    });
  }
  return (
    <button
      onClick={handleAddToWishList}
      disabled={isTransitioning}
      className="w-full cursor-pointer rounded-lg bg-black px-1 py-2 text-[0.5rem] font-semibold text-white transition-all duration-300 hover:bg-secondaryLightGraryColor hover:text-black"
    >
      {isTransitioning ? "Processing..." : "Add Wishlist"}
    </button>
  );
}
