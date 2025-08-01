import connectDB from "@/utils/connectDB"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import User from "@/models/User"
import DashboradSidebar from "@/components/layout/DashboradSidebar"
import AdminPage from "@/components/template/AdminPage"
import Profile from "@/models/Profile"
import { ReactNode } from "react"

const Admin = async ({ children }: { children: ReactNode }) => {
  await connectDB()

  const session = await getServerSession(authOptions)
  if (!session) redirect("/signIn")

  const user = await User.findOne({ email: session.user?.email })
  if (user.role !== "ADMIN") redirect("/dashboard")


  const profiles = await Profile.find({ published: false })

  return (
    <>
      <DashboradSidebar role={user.role} email={user.email}>
        {children}
      </DashboradSidebar>
      <AdminPage profiles={profiles} />
    </>
  )
}

export default Admin
