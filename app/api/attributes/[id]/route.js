import { remove, update } from "@/services/attribute.service";
import { validateAttribute } from "@/utils/validations/attribute";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params;

    await remove(id);

    return NextResponse.json(
      {
        message: "ویژگی با موفقیت حذف شد.",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    if (err.message === "ATTRIBUTE_NOT_FOUND") {
      return NextResponse.json(
        {
          message: "ویژگی پیدا نشد.",
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
export const PUT = async (request, { params }) => {
  try {
    const { id } = await params;
    const body = await request.json();
    const error = validateAttribute(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const attribute = await update(id, body.attribute_name, body.attribute_slug);

    return NextResponse.json(
      {
        message: "ویژگی با موفقیت ویرایش شد.",
        attribute,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    if (err.message === "ATTRIBUTE_NOT_FOUND") {
      return NextResponse.json(
        {
          message: "ویژگی پیدا نشد.",
        },
        {
          status: 404,
        }
      );
    }
    if (err.message === "ATTRIBUTE_SLUG_EXISTS") {
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
