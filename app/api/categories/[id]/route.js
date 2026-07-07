import { remove } from "@/services/category.service";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params;

    await remove(id);

    return NextResponse.json(
      {
        message: "دسته بندی با موفقیت حذف شد.",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    if (err.message === "CATEGORY_NOT_FOUND") {
      return NextResponse.json(
        {
          message: "دسته بندی پیدا نشد.",
        },
        {
          status: 404,
        }
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
