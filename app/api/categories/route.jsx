import { create, findAll } from "@/services/category.service";
import { validateCategory } from "@/utils/validations/category";
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
    const error = validateCategory(body);
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }
    const category = await create(body.category_name, body.category_slug);
    return NextResponse.json(
      { message: "دسته بندی با موفقیت ایجاد شد.", category },
      { status: 201 }
    );
  } catch (err) {
    if (err.message === "CATEGORY_ALREADY_EXISTS") {
      return NextResponse.json(
        { message: "این دسته بندی قبلا ایجاد شده است!" },
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
