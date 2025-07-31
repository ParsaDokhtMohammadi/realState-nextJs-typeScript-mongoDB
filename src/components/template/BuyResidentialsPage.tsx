import styles from "@/components/template/BuyResidentialsPage.module.css"
import { IProfile } from "@/types/Interfaces"
import Card from "../module/Card"

const BuyResidentialsPage = ({data}:{data:IProfile[]}) => {


  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>

      </div>
      <div className={styles.main}>
        {data.length ?
          data.map(datum=>(
            <Card key={datum._id} data={datum}></Card>
          ))
         :
         (<p className={styles.text}>هیچ آگهی ثبت نشده است</p>)}
        
      </div>
    </div>
  )
}

export default BuyResidentialsPage