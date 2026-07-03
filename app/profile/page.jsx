import { getCurrentUser } from "@/libs/auth";

const ProfilePage = async () => {
  const user = await getCurrentUser();
  console.log(user);
  return (
    <>
      <h1>اینجا پنل کاربر است</h1>
    </>
  );
};

export default ProfilePage;
