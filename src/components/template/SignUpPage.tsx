"use client"
import React, { useState } from 'react'
import styles from "@/components/template/SignupPage.module.css"
import Link from 'next/link'
const SignUpPage = () => {
    const [email , setEmail] = useState<string>("")
    const [password , setPassword] = useState<string>("")
    const [rePassword , setRePassword] = useState<string>("")
    return (
    <div className={styles.form}>
        <h4>
            فرم ثبت نام
        </h4>
        <form action="">
            <label>ایمیل:</label>
            <input
            type="text" 
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
            <label>رمز عبور:</label>
            <input
            type="password" 
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
            <label>تکرار رمز عبور:</label>
            <input
            type="password" 
            value={rePassword}
            onChange={e=>setRePassword(e.target.value)}
            />
            <button type='submit'>ثبت نام</button>
        </form>
        <p>حساب کاربری دارید؟</p>
        <Link href={"/signIn"}>ورود</Link>
    </div>
  )
}

export default SignUpPage