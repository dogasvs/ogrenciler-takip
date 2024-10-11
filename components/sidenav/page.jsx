import Logo from "@/svgs/logo/page"
import "./sidenav.css"
import signOut from "@/actions/auth"
import LogOut from "@/svgs/logout/page"

export default function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenavElements">
      <Logo />
        <a href="#">Profil</a>
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