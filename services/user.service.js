import pool from "@/libs/db";

export const findById = async (id) => {
  const [users] = await pool.execute(
    `
      SELECT
        id,
        phone,
        email,
        role,
        status,
        first_name,
        last_name,
        created_at,
        updated_at
      FROM users
      WHERE id = ?
      `,
    [id]
  );
  return users[0] || null;
};
export const findByPhone = async (phone) => {
  const [users] = await pool.execute(
    `
          SELECT
            id,
            phone,
            email,
            role,
            status,
            first_name,
            last_name,
            created_at,
            updated_at
          FROM users
          WHERE phone = ?
          `,
    [phone]
  );
  return users[0] || null;
};
export const createUser = async () => {
  // None
};
