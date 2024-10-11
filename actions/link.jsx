"use server"
import { defaultHeader } from "@/utils/supabase/header";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function StudentAdd(prevState, formData) {

  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const school_no = formData.get("schoolNo");
  const gender = formData.get("gender");

  const response = await fetch("https://nyyivhxrgqodrglbuklg.supabase.co/rest/v1/students", {
      method: "POST",
      headers: defaultHeader,
      body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          student_no: school_no,
          gender: gender,
      })
  });

  if (response.ok) {
      console.log("Başarılı");
      return { message: "Link başarıyla kısaltıldı" };
  } else {
      console.log("Başarısız");

  }

  revalidatePath("/", "layout");
  redirect("/");
}