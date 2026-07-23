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
        FROM product_attributes
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
        FROM product_attributes
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
    "SELECT id, name, slug, created_at, updated_at FROM product_attributes WHERE id = ?",
    [id]
  );
  return rows[0];
};
export const findBySlug = async (slug) => {
  const [rows] = await pool.execute(
    "SELECT id, name, slug, created_at, updated_at FROM product_attributes WHERE slug = ?",
    [slug]
  );

  return rows[0];
};
export const create = async (name, slug) => {
  const attribute = await findBySlug(slug);
  if (attribute) {
    throw new Error("ATTRIBUTE_ALREADY_EXISTS");
  }
  const [rows] = await pool.execute(
    "INSERT INTO product_attributes (name , slug) VALUES (?, ?)",
    [name, slug]
  );
  return findById(rows.insertId);
};
export const update = async (id, name, slug) => {
  const attribute = await findById(id);
  if (!attribute) {
    throw new Error("ATTRIBUTE_NOT_FOUND");
  }

  const slugExists = await findBySlug(slug);
  if (slugExists && slugExists.id !== Number(id)) {
    throw new Error("ATTRIBUTE_SLUG_EXISTS");
  }

  await pool.execute(
    `
      UPDATE product_attributes
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
    throw new Error("ATTRIBUTE_NOT_FOUND");
  }
  await pool.execute("DELETE FROM product_attributes WHERE id = ?", [id]);
  return true;
};
