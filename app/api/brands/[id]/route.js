import { validateBrand } from "@/utils/validations/brand";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { remove, update } from "@/services/brand.service";

export const PUT = async (request, { params }) => {
  let image_url = null;

  try {
    const { id } = await params;

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
            message: "فرمت تصویر مجاز نیست.",
          },
          { status: 400 }
        );
      }

      const MAX_SIZE = 2 * 1024 * 1024;

      if (image.size > MAX_SIZE) {
        return NextResponse.json(
          {
            message: "حجم تصویر نباید بیشتر از 2 مگابایت باشد.",
          },
          { status: 400 }
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

    const brand = await update(
      id,
      name,
      slug,
      country,
      description,
      is_active,
      image_url
    );

    return NextResponse.json(
      {
        message: "برند با موفقیت ویرایش شد.",
        brand,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error(err);

    if (image_url) {
      try {
        await fs.unlink(path.join(process.cwd(), "public", image_url));
      } catch {}
    }

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
