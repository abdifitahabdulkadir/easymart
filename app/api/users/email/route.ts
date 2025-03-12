import UserModel from "@/database/user.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const email = await req.json();

  try {
    const user = await UserModel.findOne({ email: String(email) });
    if (!user)
      return NextResponse.json({ success: false, data: null }, { status: 404 });

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 },
      );
    return NextResponse.json(
      { success: false, message: String(error) },
      { status: 500 },
    );
  }
}
