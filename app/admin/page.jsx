import { findById, findByPhone } from "@/services/user.service";

const AdminPage = async () => {
  const user = await findByPhone("9134673387");
  console.log(user);

  return (
    <>
      <h1>اینجا پنل ادمین است</h1>
    </>
  );
};

export default AdminPage;
