"use server";

import { auth } from "@/auth";
import { WishlistParams } from "@/types/types";
import { revalidatePath } from "next/cache";
import prismaClient from "./prisma";

export async function addToWishList({
  categoryName,
  productId,
  price,
}: WishlistParams) {
  const session = await auth();

  try {
    if (!session?.user?.id) {
      throw new Error("User is not authenticated");
    }
    const data = {
      categoryName,
      productId,
      ownerId: session.user.id,
      price,
    };
    const newWishList = await prismaClient.wishlist.create({
      data: {
        ...data,
      },
    });

    if (!newWishList) throw new Error("Failed to add Wishlist try again");
    revalidatePath("/");
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
  try {
    const deleteWishlist = await prismaClient.wishlist.delete({
      where: {
        productId,
      },
    });
    if (!deleteWishlist) throw new Error("Failed to remove item from wishlist");
    revalidatePath("/wishlist");
    return { success: true };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };
    return { success: false, message: String(error), status: 400 };
  }
}

export async function getWishlistsItems() {
  const session = await auth();

  try {
    const wishlistItems = await prismaClient.wishlist.findMany({
      where: {
        ownerId: session?.user?.id,
      },
    });

    if (!wishlistItems) return { success: false, data: [] };

    return { success: true, data: JSON.parse(JSON.stringify(wishlistItems)) };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };
    return { success: false, message: String(error), status: 400 };
  }
}
