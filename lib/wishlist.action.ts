"use server";

import { auth } from "@/auth";
import WishListModel from "@/database/wishlist.model";
import { WishlistParams } from "@/types/types";
import dbConnect from "./dbconnection";

export async function addToWishList({
  categoryName,
  productId,
}: WishlistParams) {
  const session = await auth();
  await dbConnect();
  try {
    const data = {
      categoryName,
      productId,
      ownerId: session?.user?.id,
    };
    const [newWishList] = await WishListModel.create([
      {
        ...data,
      },
    ]);

    if (!newWishList) throw new Error("Failed to add Wishlist try again");

    return {
      success: true,
      data: JSON.stringify(newWishList),
      status: 201,
    };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };
    return { success: false, message: String(error), status: 400 };
  }
}

export async function removeFromWishlist({
  productId,
}: Pick<WishlistParams, "productId">) {
  await dbConnect();
  try {
    const deleteWishlist = await WishListModel.findOneAndDelete(
      { productId },
      { new: true },
    );
    if (!deleteWishlist) throw new Error("Failed to remove item from wishlist");

    return { success: true };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };
    return { success: false, message: String(error), status: 400 };
  }
}

export async function getWishlistsItems() {
  const session = await auth();
  await dbConnect();
  try {
    const wishlistItems = await WishListModel.find({
      ownerId: session?.user?.id,
    }).select("productId ownerId");

    if (!wishlistItems) return { success: false, data: [] };

    return { success: true, data: JSON.parse(JSON.stringify(wishlistItems)) };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };
    return { success: false, message: String(error), status: 400 };
  }
}
