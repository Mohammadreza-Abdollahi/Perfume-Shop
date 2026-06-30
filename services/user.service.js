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
export const findAuthUserByPhone = async (phone) => {
  const [users] = await pool.execute(
    `
          SELECT
            id,
            phone,
            password,
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
    throw new Error("PHONE_ALREADY_EXISTS");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const [result] = await pool.execute(
    "INSERT INTO users (first_name, last_name, phone, password) VALUES (?, ?, ?, ?)",
    [first_name, last_name, phone, hashedPassword]
  );
  return await findById(result.insertId);
};
export const update = async () => {
  // None
};
export const changePassword = async () => {
  // None
};
export const deleteById = async () => {
  // None
};
