import DashboradSidebar from "@/components/layout/DashboradSidebar"
import { IChildren } from "@/types/Interfaces"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
const DashboardLayout = async({children}:IChildren) => {
    const session = await getServerSession(authOptions)
    if(!session) redirect("/")
  return (
    <DashboradSidebar>{children}</DashboradSidebar>
  )
}

export default DashboardLayout