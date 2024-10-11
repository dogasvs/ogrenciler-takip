import { createClient } from "@/utils/supabase/server"
import "./adminheader.css"

export default async function AdminHeader() {
  const supabase = createClient();
  const {data, error} = await supabase.auth.getUser();
  console.log(data + 'fasfdsafd');
  return (
    <div className="adminHeader">
      <h1>Admin Portalına Hoşgeldin !</h1>
      <p>{data?.user_metadata?.first_name} {data?.user_metadata?.last_name}</p>
    </div>
  )
}