import { findUserByToken } from "@/services/session.service";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
  if (!token) {
    return null;
  }
  const user = await findUserByToken(token);
  if (!user) {
    return null;
  }
  return user;
};
export async function logout() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
  if (token) {
    await deleteByToken(token);
  }
  cookieStore.delete("session_token");
}
export const requireAdmin = async () => {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/auth/login");
  }
  if (user.role !== "ADMIN") {
    redirect("/");
  }
};
export const requireUser = async () => {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/auth/login");
  }
};
