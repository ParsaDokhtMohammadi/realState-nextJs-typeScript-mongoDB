"use client"
import React, { useState } from 'react'
import styles from "@/components/template/SignUpPage.module.css"
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import {  useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Loader from '../module/Loader'


const SignInPage = () => {
    const router = useRouter()
    const [loading , setLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    
    const  signInHandler = async(e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault()
        setLoading(true)
        const res = await signIn("credentials",{
            email , password , redirect:false
        })
        setLoading(false)
        if(res?.error){
            toast.error(res?.error)
        }else{
            router.push("/")
        }
    }
    return (
        <>
            <Toaster></Toaster>
            <div className={styles.form}>
                <h4>
                    فرم ورود             
                </h4>
                <form action="">
                    <label>ایمیل:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>رمز عبور:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {loading ?(
                        <Loader></Loader>
                    ):(
                        <button type='submit' onClick={signInHandler}>ورود</button>
                    )}
                    
                   
                </form>
                <p>حساب کاربری ندارید؟
                <Link href={"/signUp"}>ثبت نام</Link>
                </p>
            </div>
        </>
    )
}

export default SignInPage