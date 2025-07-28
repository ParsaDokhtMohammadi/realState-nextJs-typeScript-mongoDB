import DashboradSidebar from "@/components/layout/DashboradSidebar"
import { IChildren } from "@/types/Interfaces"
const DashboardLayout = ({children}:IChildren) => {
  return (
    <DashboradSidebar>{children}</DashboradSidebar>
  )
}

export default DashboardLayout