import DashboradSidebar from "@/components/layout/DashboradSidebar"
import { IChildren } from "@/types/Interfaces"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import connectDB from "@/utils/connectDB"
import User from "@/models/User"
const DashboardLayout = async({children}:IChildren) => {
    const session = await getServerSession(authOptions)
    if(!session) redirect("/signIn")
    await connectDB()
    const user = await User.findOne({email:session.user?.email})
    if(!user) return <h3>مشکلی پیش آمده است</h3>
  return (
    <DashboradSidebar role={user.role} email={user.email}>{children}</DashboradSidebar>
  )
}

export default DashboardLayout