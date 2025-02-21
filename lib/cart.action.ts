"use server";

import { auth } from "@/auth";
import CartModel from "@/database/cart.model";
import { CartParams } from "@/types/types";
import { NextResponse } from "next/server";
import dbConnect from "./dbconnection";

export async function addToCart({ categoryName, productId }: CartParams) {
  const session = await auth();
  await dbConnect();
  try {
    const [newCartItem] = await CartModel.create([
      {
        categoryName: categoryName,
        productId: productId,
        ownerId: session?.user?.id,
      },
    ]);

    if (!newCartItem) throw new Error("Failed to add Cart try again");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newCartItem)),
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }

    return {
      success: false,
      message: String(error),
    };
  }
}

export async function removeFromCart({
  productId,
}: Pick<CartParams, "productId">) {
  await dbConnect();
  try {
    const deletedCartItem = await CartModel.findOneAndDelete(
      { productId },
      { new: true },
    );
    if (!deletedCartItem) throw new Error("Failed to remove item from cart");

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };

    return { success: false, message: String(error), status: 400 };
  }
}

export async function getCartItems() {
  const session = await auth();
  await dbConnect();
  try {
    const carItems = await CartModel.find({
      ownerId: session?.user?.id,
    }).select("productId ownerId");

    if (!carItems) return { success: false, data: [] };

    return { success: true, data: JSON.parse(JSON.stringify(carItems)) };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };
    return { success: false, message: String(error), status: 400 };
  }
}
