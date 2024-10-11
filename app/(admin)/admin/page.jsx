import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import "../admin.css"
import Guncelle from "@/svgs/guncelle";
import DeleteStudent from "../studentdelete/page";

export default async function Admin() {
  const supabase = createClient();
  const {data, error} = await supabase.from("students").select("*");
  return (
    <div className="studentList">
        {data?.map((x, i) => (
          <div className="students" key={i}>
            <div className="studentImage">
              <Image width={100} height={100} src={`${x.gender === "kadın" ? "/img/woman.png" : "/img/man.png"}`} />
            </div>
            <div className="student">
              <div className="studentInform">
                <p>{x.first_name} {x.last_name}</p> 
              </div>
              <div className="updateStudent">
                <DeleteStudent dataid={x.id} />
                <Guncelle />
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}