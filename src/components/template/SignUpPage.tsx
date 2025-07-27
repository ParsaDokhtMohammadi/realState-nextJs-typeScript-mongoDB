"use client"
import React, { useState } from 'react'
import styles from "@/components/template/SignupPage.module.css"
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'
import { IResponse} from '@/types/Interfaces'
import { useRouter } from 'next/navigation'
import { BeatLoader } from 'react-spinners'


const SignUpPage = () => {
    const router = useRouter()
    const [loading , setLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rePassword, setRePassword] = useState<string>("")
    const  signUpHandler = async(e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault()
        setLoading(true)
        if (password !== rePassword) {
            toast.error("رمز و تکرار آن برابر نیست")
            setLoading(false)
            return
        }
        const res = await fetch("/api/auth/signUp",{
            method : "POST",
            body : JSON.stringify({email , password}),
            headers : {"Content-Type":"application/json"}
        })
        const data:IResponse = await res.json()
        setLoading(false)
        if(data.status===201){
            router.push("signIn")
        }else{
            toast.error(data.error??"")
        }
    }
    return (
        <>
            <Toaster></Toaster>
            <div className={styles.form}>
                <h4>
                    
                    فرم ثبت نام
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
                    <label>تکرار رمز عبور:</label>
                    <input
                        type="password"
                        value={rePassword}
                        onChange={e => setRePassword(e.target.value)}
                    />
                    {loading ?(
                         <BeatLoader color='#304ffe' size={25} cssOverride={{margin:"auto"}}/>
                    ):(
                        <button type='submit' onClick={signUpHandler}>ثبت نام</button>
                    )}
                    
                   
                </form>
                <p>حساب کاربری دارید؟</p>
                <Link href={"/signIn"}>ورود</Link>
            </div>
        </>
    )
}

export default SignUpPage