import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Login | Gem&Gen",
  description: "Sign in to access Gem&Gen Seller Dashboard",
};

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  const stayLoggedIn = cookieStore.get("admin_stay_logged_in");

  // If already authenticated or stay-logged-in is active, redirect on the server
  // This guarantees the login modal will NEVER render or flash on screen
  if (session?.value === "authenticated_funmi" || stayLoggedIn?.value === "true") {
    redirect("/admin");
  }

  return <LoginForm />;
}
