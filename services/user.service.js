import pool from "@/libs/db";
import bcrypt from "bcrypt";

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
export const create = async (first_name, last_name, phone, password) => {
  const existUser = await findByPhone(phone);
  if (existUser) {
    throw new Error("این شماره تلفن موجود است!");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const [res] = await pool.query(
    "INSERT INTO users (first_name, last_name, phone, password) VALUES (?, ?, ?, ?)",
    [first_name, last_name, phone, hashedPassword]
  );
  return {
    id: result.insertId,
    first_name,
    last_name,
    phone,
    role: "user",
  };
};
export const update = async () => {
  // None
};
