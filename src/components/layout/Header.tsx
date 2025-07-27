"use client"
import { FiLogIn } from "react-icons/fi"
import styles from "./Header.module.css"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { FaUserAlt } from "react-icons/fa"
const Header = () => {
  const {data} = useSession()
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/buy-residential"}>آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <Link href={"/dashboard"}>
        <FaUserAlt/>
        </Link>
      ) : (
        <div className={styles.login}>
        <Link href={"/signIn"}>
        <FiLogIn></FiLogIn>
        <span>ورود</span>
        </Link>
      </div>
      )}
    </header>
  )
}

export default Header