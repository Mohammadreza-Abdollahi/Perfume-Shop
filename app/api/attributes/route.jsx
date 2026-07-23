import { create, findAll } from "@/services/attribute.service";
import { validateAttribute } from "@/utils/validations/attribute";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "id";
    const order = searchParams.get("order") || "DESC";

    const result = await findAll({
      page,
      limit,
      search,
      sort,
      order,
    });
    return NextResponse.json(result);
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
export const POST = async (request) => {
  try {
    const body = await request.json();
    const error = validateAttribute(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }
    const attribute = await create(body.attribute_name, body.attribute_slug);
    return NextResponse.json(
      { message: "ویژگی با موفقیت ایجاد شد.", attribute },
      { status: 201 }
    );
  } catch (err) {
    if (err.message === "ATTRIBUTE_ALREADY_EXISTS") {
      return NextResponse.json(
        { message: "این ویژگی قبلا ایجاد شده است!" },
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
