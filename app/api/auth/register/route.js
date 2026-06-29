import { create } from "@/services/user.service";
import { validateRegister } from "@/utils/validations/register";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const error = validateRegister(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }
    const user = await create(
      body.first_name,
      body.last_name,
      body.phone,
      body.password
    );
    return NextResponse.json(
      { message: "ثبت نام با موفقیت انجام شد.", user },
      { status: 201 }
    );
  } catch (err) {
    if (err.message === "PHONE_ALREADY_EXISTS") {
      return NextResponse.json(
        { message: "این شماره موبایل قبلاً ثبت شده است." },
        { status: 409 }
      );
    }
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
