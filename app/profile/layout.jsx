import { requireUser } from "@/libs/auth";

const ProfileLayout = async ({ children }) => {
  await requireUser();
  return <>{children}</>;
};

export default ProfileLayout;
