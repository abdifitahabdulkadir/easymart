"use server";

import { auth } from "@/auth";
import { CartParams, IncrementDecrementParams } from "@/types/types";
import { revalidatePath } from "next/cache";
import dbConnect from "./dbconnection";
import prismaClient from "./prisma";

export async function addToCart({
  categoryName,
  price,
  productId,
}: CartParams) {
  const session = await auth();
  await dbConnect();
  try {
    let newCartItem;
    if (!session?.user)
      throw new Error("You need to authenticate to perform such actions");

    newCartItem = await prismaClient.cart.findFirst({
      where: {
        productId,
      },
    });

    if (newCartItem) return;

    newCartItem = await prismaClient.cart.create({
      data: {
        categoryName,
        productId,
        ownerId: session?.user?.id ?? "",
        price,
        quantity: 1,
      },
    });

    if (!newCartItem) throw new Error("Failed to add Cart try again");

    revalidatePath("/");
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
  const session = await auth();
  try {
    if (!session)
      throw new Error("You need to authenticate to perform such actions");

    const deletedCartItem = await prismaClient.cart.delete({
      where: {
        productId: productId,
      },
    });
    if (!deletedCartItem) throw new Error("Failed to remove item from cart");

    revalidatePath("/cart");
    return { success: true };
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
    if (!session)
      throw new Error("You need to authenticate to perform such actions");
    const carItems = await prismaClient.cart.findMany({
      where: {
        ownerId: session?.user?.id,
      },
    });

    if (!carItems) return { success: false, data: [] };

    return { success: true, data: JSON.parse(JSON.stringify(carItems)) };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };
    return { success: false, message: String(error), status: 400 };
  }
}

export async function incrmentDecrementCart(params: IncrementDecrementParams) {
  const session = await auth();
  await dbConnect();
  try {
    if (!session)
      throw new Error("You need to authenticate to perform such actions");

    const { productId, operationType } = params;

    if (operationType === "decrement") {
      const oldQuantity = await prismaClient.cart.findFirst({
        where: {
          productId,
        },
        select: {
          quantity: true,
        },
      });
      if (oldQuantity?.quantity === 1) {
        await removeFromCart({ productId });
      } else {
        await prismaClient.cart.update({
          where: {
            productId,
          },
          data: {
            quantity: {
              decrement: 1,
            },
          },
        });
      }

      return { success: true };
    }

    await prismaClient.cart.update({
      where: {
        productId,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message, status: 400 };
    return { success: false, message: String(error), status: 400 };
  }
}
