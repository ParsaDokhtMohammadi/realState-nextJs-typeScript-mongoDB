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
import { e2p, sp } from "@/utils/replaceNumber"
import { JSX } from "react"

const categories:{villa:string,apartment:string,store:string,office:string} = {
  apartment : "آپارتمان",
  villa : "ویلا",
  store : "مغازه",
  office : "دفتر"
}
const icons:{villa:JSX.Element,apartment:JSX.Element,store:JSX.Element,office:JSX.Element}={
  villa : <RiHome3Line/>,
  apartment : <MdApartment/>,
  store : <BiStore/>,
  office : <GiOfficeChair/>
}

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
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge/>
          <p>املاک {data.realState}</p>
          <span>
            <AiOutlinePhone/>
            {e2p(data.phone)}
          </span>
        </div>
        <div className={styles.price}>
          <p>
            {icons[data.category as keyof typeof icons]}
          </p>
          <p>
            {sp(data.price)} تومان 
          </p>
          <p>
            <BiCalendarCheck/>
            {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage