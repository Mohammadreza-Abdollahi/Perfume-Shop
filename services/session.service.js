import pool from "@/libs/db";

export const findSession = async () => {
  // None
};
export const create = async (userId, token, expiresAt) => {
  await pool.execute(
    `
    INSERT INTO sessions (
      user_id,
      token,
      expires_at
    )
    VALUES (?, ?, ?)
    `,
    [userId, token, expiresAt]
  );
};
export const deleteSession = async () => {
  // None
};
