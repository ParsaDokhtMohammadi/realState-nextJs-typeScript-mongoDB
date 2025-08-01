import styles from "@/components/template/AdminPage.module.css"
import { IProfile } from "@/types/Interfaces"

const AdminPage = ({profiles}:{profiles:IProfile[]}) => {
  return (
    <div>
       {profiles.length ? profiles.map(profile=>(""))
       :<p className={styles.text}>هیچ آگهی وجوذ ندارد</p>}
       
    </div>
  )
}

export default AdminPage