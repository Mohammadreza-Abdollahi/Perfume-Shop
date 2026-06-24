import mysql from "mysql2/promise";

const globalForMysql = global;

const pool =
  globalForMysql.mysqlPool ||
  mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

if (!globalForMysql.mysqlPool) {
  console.log("✅ MySQL Pool Created");
}

if (process.env.NODE_ENV !== "production") {
  globalForMysql.mysqlPool = pool;
}

export default pool;