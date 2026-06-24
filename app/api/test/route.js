import pool from "@/libs/db"

export const GET = async () => {
    const [product] = await pool.execute("SELECT *")
}