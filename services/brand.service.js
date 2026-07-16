import pool from "@/libs/db";
import path from "path";
import { promises as fs } from "fs";

export const findAll = async ({
  page = 1,
  limit = 10,
  search = "",
  sort = "id",
  order = "DESC",
}) => {
  const offset = (page - 1) * limit;
  const allowedSorts = ["id", "name", "created_at"];
  const sortColumn = allowedSorts.includes(sort) ? sort : "id";
  const sortOrder = order.toUpperCase() === "ASC" ? "ASC" : "DESC";
  const keyword = `%${search}%`;

  const [rows] = await pool.execute(
    `
        SELECT
        id, name, slug, country, description, is_active, logo_url, created_at, updated_at
        FROM brands
        WHERE name LIKE ?
        ORDER BY ${sortColumn} ${sortOrder}
        LIMIT ${Number(limit)}
        OFFSET ${Number(offset)}
        `,
    [keyword]
  );

  const [count] = await pool.execute(
    `
        SELECT COUNT(*) AS total
        FROM brands
        WHERE name LIKE ?
        `,
    [keyword]
  );
  const total = count[0].total;

  return {
    data: rows,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  };
};
export const findById = async (id) => {
  const [rows] = await pool.execute(
    "SELECT id, name, slug, country, description, is_active, logo_url, created_at, updated_at FROM brands WHERE id = ?",
    [id]
  );
  return rows[0];
};
export const findBySlug = async (slug) => {
  const [rows] = await pool.execute(
    "SELECT id, name, slug, country, description, is_active, logo_url, created_at, updated_at FROM brands WHERE slug = ?",
    [slug]
  );

  return rows[0];
};
export const create = async (
  name,
  slug,
  country,
  description,
  logo_url,
  is_active
) => {
  const brand = await findBySlug(slug);
  if (brand) {
    throw new Error("BRAND_ALREADY_EXISTS");
  }
  const [rows] = await pool.execute(
    "INSERT INTO brands (name , slug, country, description, logo_url, is_active) VALUES (?, ? ,? ,? ,? ,?)",
    [name, slug, country, description, logo_url, is_active]
  );
  return findById(rows.insertId);
};
export const update = async (
  id,
  name,
  slug,
  country,
  description,
  is_active,
  newLogoUrl = null
) => {
  const brand = await findById(id);
  if (!brand) {
    throw new Error("BRAND_NOT_FOUND");
  }

  const slugExists = await findBySlug(slug);
  if (slugExists && slugExists.id !== Number(id)) {
    throw new Error("BRAND_SLUG_EXISTS");
  }
  let logo_url = brand.logo_url;
  if (newLogoUrl) {
    if (brand.logo_url) {
      try {
        const oldImagePath = path.join(process.cwd(), "public", brand.logo_url);

        await fs.unlink(oldImagePath);
      } catch (err) {
        if (err.code !== "ENOENT") {
          throw err;
        }
      }
    }

    logo_url = newLogoUrl;
  }

  await pool.execute(
    `
      UPDATE brands
      SET
        name = ?,
        slug = ?,
        country = ?,
        description = ?,
        logo_url = ?,
        is_active = ?
      WHERE id = ?
    `,
    [name, slug, country, description, logo_url, is_active, id]
  );
  return await findById(id);
};
export const remove = async (id) => {
  const [rows] = await pool.execute(
    "SELECT logo_url FROM brands WHERE id = ?",
    [id]
  );
  const brand = rows[0];
  if (!brand) {
    throw new Error("BRAND_NOT_FOUND");
  }

  if (brand.logo_url) {
    const filePath = path.join(process.cwd(), "public", brand.logo_url);
    try {
      await fs.unlink(filePath);
    } catch (err) {
      console.warn("Brand image not found:", filePath);
    }
  }
  await pool.execute("DELETE FROM brands WHERE id = ?", [id]);
  return true;
};
