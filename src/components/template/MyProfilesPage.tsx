import styles from "@/components/template/MyProfilesPage.module.css"
import { IProfile } from "@/types/Interfaces"
import DashboardCard from "../module/DashboardCard"
import { json } from "stream/consumers"

type Prof = {
    profiles:IProfile[]
}
const MyProfilesPage = ({profiles}:Prof) => {    
  return (
    <div>
        {
            profiles.length ? null :<p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        }
        {
            profiles.map(profile=><DashboardCard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>)
        }
    </div>
  )
}

export default MyProfilesPage