import { logout } from "@/libs/auth";
import { redirect } from "next/navigation";

const LogoutPage = async () => {
  await logout();
  redirect("/");
  return (
    <>
      <h1>کمی صبر کنید...</h1>
    </>
  );
};

export default LogoutPage;
