import { createClient } from "@/utils/supabase/server"


export default async function Portal() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  return (
    <></>
  )
}