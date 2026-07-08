import pool from "@/libs/db";

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
            id,
            name,
            slug,
            created_at,
            updated_at
        FROM categories
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
        FROM categories
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
    "SELECT id, name, slug, created_at, updated_at FROM categories WHERE id = ?",
    [id]
  );
  return rows[0];
};
export const findBySlug = async (slug) => {
  const [rows] = await pool.execute(
    "SELECT id, name, slug, created_at, updated_at FROM categories WHERE slug = ?",
    [slug]
  );

  return rows[0];
};
export const create = async (name, slug) => {
  const category = await findBySlug(slug);
  if (category) {
    throw new Error("CATEGORY_ALREADY_EXISTS");
  }
  const [rows] = await pool.execute(
    "INSERT INTO categories (name , slug) VALUES (?, ?)",
    [name, slug]
  );
  return findById(rows.insertId);
};
export const update = async (id, name, slug) => {
  const category = await findById(id);
  if (!category) {
    throw new Error("CATEGORY_NOT_FOUND");
  }

  const slugExists = await findBySlug(slug);
  if (slugExists && slugExists.id !== Number(id)) {
    throw new Error("CATEGORY_SLUG_EXISTS");
  }

  await pool.execute(
    `
      UPDATE categories
      SET
        name = ?,
        slug = ?
      WHERE id = ?
    `,
    [name, slug, id]
  );
  return await findById(id);
};
export const remove = async (id) => {
  const category = await findById(id);
  if (!category) {
    throw new Error("CATEGORY_NOT_FOUND");
  }
  await pool.execute("DELETE FROM categories WHERE id = ?", [id]);
  return true;
};
