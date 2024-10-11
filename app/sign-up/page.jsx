import { signUp } from "@/actions/auth";
import "./signup.css";
import Logo from "@/svgs/logo/page";
import Link from "next/link";

export default function SignUpPage() {
  return (
       <form className="signUpForm" action={signUp}>
        <div className="logo">
          <Logo /> 
          <h1>Kayıt Ol</h1>
        </div>
        <label htmlFor="firstName">Adınız</label>
        <input type="text" name="firstname" placeholder="adınız" /> <br />
        <label htmlFor="lastName">Soyadınız </label>
        <input type="text" name="lastname" placeholder="soyadınız" />  <br />
        <label htmlFor="email">E-posta Adresiniz</label>
        <input type="email" name="email" placeholder="username@gmail.com" />  <br />
        <label htmlFor="password">Şifreniz</label>
        <input type="password" name="password" placeholder="********" />
        <button className="SignupBtn">Kayıt Ol</button>
        <div className="orSignUp">
          <p>Hesabın Zaten Var Mı? <Link href={"/login"} className='kaydolBtn'>Giriş Yap</Link> </p>
      </div>
     </form>
  )
}