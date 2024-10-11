import AdminHeader from "@/components/adminHeader";
import Main from "@/components/main";
import Sidenav from "@/components/sidenav";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "./portal.css"

export default async function PortalLayout({ children }) {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if(!user) {
    redirect("/login")
  }
  return (
    <div className="portalLayout">
      <Sidenav />
      <div className="content">
        <AdminHeader />
        <Main />
      </div>
      {children}
    </div>
  );
}