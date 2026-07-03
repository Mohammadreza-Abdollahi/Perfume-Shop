import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteByToken } from "@/services/session.service";

export const POST = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("session_token")?.value;
    if (token) {
      await deleteByToken(token);
    }
    cookieStore.delete("session_token");
    return NextResponse.json(
      {
        message: "با موفقیت خارج شدید.",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "خطای داخلی سرور",
      },
      {
        status: 500,
      }
    );
  }
};
