import styles from "@/components/layout/DashboardSidebar.module.css"
import { CgProfile } from "react-icons/cg"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"
import LogoutButton from "../module/LogoutButton"
import { ReactNode } from "react"

const DashboradSidebar = async( { children , email , role }: {children:ReactNode , email:string , role:string}) => {
  const session = await getServerSession(authOptions)
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile></CgProfile>
        {role==="ADMIN"?("admin"):null}
        <p>{session ?session.user?.email:""}</p>
        <span></span>
        <Link href={"/dashboard"}>حساب کاربری</Link>
        <Link href={"/dashboard/my-profiles"}>آگهی های من</Link>
        <Link href={"/dashboard/add"}>ثبت آگهی</Link>
        {role==="ADMIN" ?(<Link href={"/dashboard/admin"}>در انتظار تایید</Link>):null}
        <LogoutButton></LogoutButton>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default DashboradSidebar