import styles from "@/components/module/AdminCard.module.css"
import { IProfile } from "@/types/Interfaces"
import { sp } from "@/utils/replaceNumber"
const AdminCard = ({data} : {data:IProfile}) => {
  return (
    <div className={styles.container}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className={styles.properties}>
            <span>{data.location}</span>
            <span>{sp(data.price)}</span>
        </div>
        <button>اتشار</button>
    </div>
  )
}

export default AdminCard