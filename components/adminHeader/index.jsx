import { createClient } from "@/utils/supabase/server"
import "./adminheader.css"

export default async function AdminHeader() {
  const supabase = createClient();
  const {data: {user}, error} = await supabase.auth.getUser();
  return (
    <div className="adminHeader">
      <h1>Lorem ipsum dolor sappariatur. In!</h1>
      <p>{user.user_metadata.firstname} {user.user_metadata.lastname}</p>
    </div>
  )
}