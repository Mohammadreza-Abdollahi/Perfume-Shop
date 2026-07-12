import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { create, findAll } from "@/services/brand.service";
import { validateBrand } from "@/utils/validations/brand";

export const GET = async (request, { params }) => {
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
  let image_url = null;
  try {
    const formData = await request.formData();

    const name = formData.get("brand_name");
    const slug = formData.get("brand_slug");
    const country = formData.get("brand_country");
    const description = formData.get("brand_description");
    const is_active = formData.get("brand_active") === "on" ? 1 : 0;
    const image = formData.get("brand_logo");

    const error = validateBrand({
      brand_name: name,
      brand_slug: slug,
      brand_country: country,
      brand_description: description,
      brand_active: is_active,
    });
    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    if (image && image.size > 0) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/jpg",
      ];
      if (!allowedTypes.includes(image.type)) {
        return NextResponse.json(
          {
            message:
              "فرمت تصویر مجاز نیست. فقط JPG، PNG و WEBP قابل قبول هستند.",
          },
          {
            status: 400,
          }
        );
      }

      const MAX_SIZE = 2 * 1024 * 1024;
      if (image.size > MAX_SIZE) {
        return NextResponse.json(
          {
            message: "حجم تصویر نباید بیشتر از 2 مگابایت باشد.",
          },
          {
            status: 400,
          }
        );
      }

      const extension = image.name.split(".").pop().toLowerCase();
      const filename = `${crypto.randomUUID()}.${extension}`;
      const uploadPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        "brands",
        filename
      );
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await fs.writeFile(uploadPath, buffer);
      image_url = `/uploads/brands/${filename}`;
    }

    const brand = await create(
      name,
      slug,
      country,
      description,
      image_url,
      is_active
    );

    return NextResponse.json(
      {
        message: "برند با موفقیت ایجاد شد.",
        brand,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.error(err);

    if (err.message === "BRAND_ALREADY_EXISTS") {
      return NextResponse.json(
        {
          message: "این برند قبلاً ثبت شده است.",
        },
        {
          status: 409,
        }
      );
    }
    if (image_url) {
      try {
        await fs.unlink(path.join(process.cwd(), "public", imageUrl));
      } catch (deleteError) {
        console.error("Error deleting uploaded image:", deleteError);
      }
    }
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
