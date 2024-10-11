import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export default async function Portal() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  return (
    <></>
  )
}