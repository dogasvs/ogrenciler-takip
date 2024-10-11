import Main from "@/components/main";
import Sidenav from "@/components/sidenav";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function PortalLayout({ children }) {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if(!user) {
    redirect("/login")
  }
  return (
    <div className="PortalLayout">
      <Sidenav />
      <Main />
      {children}
    </div>
  );
}