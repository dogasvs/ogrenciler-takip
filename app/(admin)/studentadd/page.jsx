"use client";
import { StudentAdd } from "@/actions/link";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import "../admin.css"

 export default function StudentAddForm() {
    const [state, action] = useFormState(StudentAdd, {
      message: null,
      error: null
    });

    const formRef = useRef(null);
    useEffect(() => {
      if (state?.message) {
          formRef.current.reset();
      }
      console.log(state?.message);
    }, [state]);
  
  return (
    <div>
      <form className="studentAddForm" ref={formRef} action={action}>
        <label htmlFor="firstname">
          <input type="text" placeholder="Adı" name='firstname' />
        </label>
        <label htmlFor="lastname">
          <input type="text" placeholder="Soyadı" name='lastname' />
        </label>
        <label htmlFor="schoolNo">
          <input type="text" placeholder="Öğrenci Numarası" name='schoolNo' />
        </label>
        <select name='gender'>
          <option value="">Lütfen cinsiyet seçiniz</option>
          <option value="erkek">Erkek</option>
          <option value="kadin">Kadın</option>
        </select>
        <button className="studentAddBtn" type="submit">Öğrenci Ekle</button>
      </form>
    </div>
  );
};
