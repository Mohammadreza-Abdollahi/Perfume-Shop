import pool from "@/libs/db";

const AdminPage = async () => {
  try {
    const [products] = await pool.query("SELECT * FROM users");

    console.log(products);
  } catch (error) {
    console.error("MYSQL ERROR:", error);
  }

  return (
    <>
      <h1>اینجا پنل ادمین است</h1>
    </>
  );
};

export default AdminPage;
