import Link from "next/link"
import "./main.css"
import Admin from "@/app/(admin)/admin/page"
import AddStudent from "@/svgs/addstudent"

export default function Main() {
  return (
    <div className="main">
      <div className="addStudentFormBtn">
        <Link href={"/studentadd"}>Öğrenci Ekle </Link>
        <AddStudent />
      </div>
      <Admin />
    </div>
  )
}