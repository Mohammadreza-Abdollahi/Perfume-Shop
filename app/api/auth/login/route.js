import { create } from "@/services/session.service";
import { findAuthUserByPhone } from "@/services/user.service";
import { validateLogin } from "@/utils/validations/login";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();

    const error = validateLogin(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const user = await findAuthUserByPhone(body.phone);
    if (!user) {
      return NextResponse.json(
        { message: "کاربری یافت نشد!" },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(body.password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { message: "اطلاعات وارد شده صحیح نیست!" },
        { status: 401 }
      );
    }

    const token = crypto.randomUUID();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    await create(user.id, token, expiresAt);

    const cookieStore = await cookies();
    cookieStore.set({
      name: "session_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: expiresAt,
      path: "/",
    });

    return NextResponse.json(
      {
        message: "ورود موفق بود.",

        user: {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          role: user.role,
        },
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);
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
