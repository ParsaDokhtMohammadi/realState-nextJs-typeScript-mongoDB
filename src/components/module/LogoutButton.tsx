"use client"
import styles from "@/components/module/LogoutButton.module.css"
import { signOut } from "next-auth/react"
import { FiLogOut } from "react-icons/fi"

const LogoutButton = () => {
    const signingOut = ():void =>{
        signOut()
        
    }
    return (
    <button className={styles.button} onClick={signingOut}>
        <FiLogOut></FiLogOut>
        خروج
    </button>
  )
}

export default LogoutButton