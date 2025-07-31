import { JSX } from "react"
import styles from "@/components/module/Card.module.css"
import { CATEGORY, IProfile } from "@/types/Interfaces"
import { RiHome3Line } from "react-icons/ri"
import { BiStore } from "react-icons/bi"
import { MdApartment } from "react-icons/md"
import { GiOfficeChair } from "react-icons/gi"
import { FaQuestionCircle } from "react-icons/fa"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiLeftArrowAlt } from "react-icons/bi"
import { sp } from "@/utils/replaceNumber"
import Link from "next/link"


const Card = ({data : {_id,category,title,location,price}}:{data:IProfile}) => {
const icons: Record<CATEGORY, JSX.Element> = {
  [CATEGORY.VILLA]: <RiHome3Line />,
  [CATEGORY.APARTMENT]: <MdApartment />,
  [CATEGORY.STORE]: <BiStore />,
  [CATEGORY.OFFICE]: <GiOfficeChair />,
  [CATEGORY.NULL]: <FaQuestionCircle />
}
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {icons[category]}
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>
          <HiOutlineLocationMarker/>
          {location}
        </p>
        <span>{sp(price) }  تومان</span>
        <Link href={`buy-residential/${_id}`}>مشاهده آگهی
        <BiLeftArrowAlt/>
        </Link>

      </div>
    </div>
  )
}

export default Card 