"use server";

import { InvalidLoginError, signIn } from "@/auth";
import { z } from "zod";
import dbConnect from "./dbconnection";
import prismaClient from "./prisma";
import { SignInSchema, SignUpSchema } from "./validations";

export async function signUpWithCrendentials(
  params: z.infer<typeof SignUpSchema>,
) {
  await dbConnect();

  const { email, password, name } = params!;
  try {
    const existedUer = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (existedUer) throw new Error("User is already existed");

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    if (!newUser) throw new Error("failed to create Account! try again");
    await signIn("credentials", { email, password, redirect: false });
    return { success: true };
  } catch (error) {
    if (error instanceof Error)
      return { success: false, message: error.message };
    return { success: false, message: "Something went wrong" };
  }
}

export async function signInWithCredentials(
  params: z.infer<typeof SignInSchema>,
) {
  await dbConnect();
  const { email, password } = params!;

  try {
    await signIn("credentials", { email, password, redirect: false });
    return { success: true };
  } catch (error) {
    if (error instanceof InvalidLoginError)
      return { success: false, message: error.code };
    else if (error instanceof Error)
      return { success: false, message: error.message };
    return { success: false, message: "Something went wrong" };
  }
}
