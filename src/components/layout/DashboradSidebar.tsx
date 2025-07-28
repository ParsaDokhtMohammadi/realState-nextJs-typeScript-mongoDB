import styles from "@/components/layout/DashboardSidebar.module.css"
import { IChildren } from "@/types/Interfaces"
import { CgProfile } from "react-icons/cg"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"

const DashboradSidebar = async({ children }: IChildren) => {
  const session = await getServerSession(authOptions)
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile></CgProfile>
        <p>{session ?session.user?.email:""}</p>
        <span></span>
        <Link href={"/dashboard"}>حساب کاربری</Link>
        <Link href={"/dashboard/my-profiles"}>آگهی های من</Link>
        <Link href={"/dashboard/add"}>ثبت آگهی</Link>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default DashboradSidebar