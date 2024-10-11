"use client"
import CopKutusu from "@/svgs/copkutusu";
import { createClient } from "@/utils/supabase/client"

export default function DeleteStudent({ dataid }) {

  async function deleteData() {
    const confirmed = confirm('Emin Misin?');
    if(!confirmed) {
      return
    }

    const supabase = createClient();
    const response = await supabase
      .from('students')
      .delete()
      .eq('id', Number(dataid));
  }
  
  return (
    <button onClick={deleteData}> <CopKutusu /> </button>
  )
}