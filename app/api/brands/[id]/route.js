import { remove } from "@/services/brand.service";
import { update } from "@/services/category.service";
import { validateCategory } from "@/utils/validations/category";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  try {
    const { id } = await params;
    const body = await request.json();
    const error = validateCategory(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const category = await update(id, body.category_name, body.category_slug);

    return NextResponse.json(
      {
        message: "دسته بندی با موفقیت ویرایش شد.",
        category,
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
    if (err.message === "CATEGORY_SLUG_EXISTS") {
      return NextResponse.json(
        {
          message: "اسلاگ وجود دارد و تکراری است!",
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
export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params;
    await remove(id);

    return NextResponse.json(
      {
        message: "برند با موفقیت حذف شد.",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    if (err.message === "BRAND_NOT_FOUND") {
      return NextResponse.json(
        {
          message: "برند یافت نشد.",
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
