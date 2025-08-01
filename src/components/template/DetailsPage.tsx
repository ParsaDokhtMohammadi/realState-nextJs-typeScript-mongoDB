import styles from "@/components/template/DetailsPage.module.css"
import { IProfile } from "@/types/Interfaces"
import { SiHomebridge } from "react-icons/si"
import { AiOutlinePhone } from "react-icons/ai"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { RiHome3Line } from "react-icons/ri"
import { MdApartment } from "react-icons/md"
import { BiStore } from "react-icons/bi"
import { GiOfficeChair } from "react-icons/gi"
import { BiCalendarCheck } from "react-icons/bi"
import ItemList from "../module/ItemList"


const DetailsPage = ({ data }: { data: IProfile }) => {
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {data.location}
        </span>
        <h3 className={styles.title}>توضیحات</h3>
        <p>{data.description}</p>
        <h3 className={styles.title}>امکانات</h3>
        <ItemList data={data.ameneties} />
        <h3 className={styles.title}>قوانین</h3>
        <ItemList data={data.rules} />

      </div>
      <div className={styles.sidebar}></div>
    </div>
  )
}

export default DetailsPage