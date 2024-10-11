import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export default async function User() {
  const supabase = createClient();
  const {data: {user}, error} = await supabase.auth.getUser();
  console.log(user);

  if(!user) {
    redirect("/login");
  } else if(user.user_metadata.role == 'admin') {
    redirect("/portal")
  }

  return (
    <h1>hello {user.user_metadata.firstName} {user.user_metadata.lastName} </h1>
  )
}