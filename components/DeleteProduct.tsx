"use client";

import { removeFromCart } from "@/lib/cart.action";
import { removeFromWishlist } from "@/lib/wishlist.action";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

interface DeletePros {
  productId: string;
}
export default function DeleteProduct({ productId }: DeletePros) {
  const [isDeleting, startTransition] = useTransition();
  const pathName = usePathname();

  function handleDelete() {
    let result: {
      success: boolean;
    };
    startTransition(async () => {
      if (pathName == "/wishlist")
        result = await removeFromWishlist({
          productId,
        });
      else if (pathName == "/cart")
        result = await removeFromCart({
          productId,
        });

      if (result.success) {
        toast("Succesfully Delete Product from Wishlist", {
          type: "success",
          position: "bottom-right",
        });
        return;
      }
      toast("Failed to delete Product try again", {
        type: "error",
        position: "bottom-right",
      });
    });
  }

  if (isDeleting)
    return (
      <div className="flex w-fit animate-pulse items-center justify-center rounded-md bg-white text-xs">
        Deleting..
      </div>
    );
  return (
    <MdDelete
      onClick={handleDelete}
      title="Delete"
      className="size-6 cursor-pointer transition-all duration-500 group-hover:scale-[1.12]"
    />
  );
}
