import Logo from "@/svgs/logo"
import "./sidenav.css"
import signOut from "@/actions/auth"
import LogOut from "@/svgs/logout"

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenavElements">
         <Logo />
        <a href="#">Profil</a>
        <a href="#">Öğrenciler</a>
        <a href="#">Not bilgileri</a>
        <a href="#">Ayarlar</a>
      </div>
      <form className="sidenavlogout" action={signOut}>
        <LogOut /> 
        <button>Log Out</button>
      </form>
    </div>
  )
}