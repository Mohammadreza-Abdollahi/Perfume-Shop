import pool from "@/libs/db";

export const findUserByToken = async (token) => {
  const [result] = await pool.execute(
    `SELECT
    users.id,
    users.phone,
    users.role,
    users.status,
    users.first_name,
    users.last_name,
    users.created_at,
    users.updated_at
    FROM sessions
    INNER JOIN users
    ON users.id = sessions.user_id
    WHERE sessions.token = ?
    AND sessions.expires_at > NOW()
    LIMIT 1;`,
    [token]
  );
  if (!result) {
    return null;
  }
  return result[0];
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
export const deleteByToken = async (token) => {
  await pool.execute(
    `
    DELETE FROM sessions
    WHERE token = ?
    `,
    [token]
  );
};
