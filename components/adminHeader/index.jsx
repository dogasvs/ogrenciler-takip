import { createClient } from "@/utils/supabase/server"
import "./adminheader.css"

export default async function AdminHeader() {
  const supabase = createClient();
  const {data, error} = await supabase.auth.getUser();
  return (
    <div className="adminHeader">
      <h1>Lorem ipsum dolor sappariatur. In!</h1>
      <p>{data.first_name} {data.last_name}</p>
    </div>
  )
}