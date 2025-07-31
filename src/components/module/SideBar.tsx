import styles from "@/components/module/Sidebar.module.css"
import { CATEGORY } from "@/types/Interfaces"
import Link from "next/link"
import { HiFilter } from "react-icons/hi"

const SideBar = () => {
  return (
    <div className={styles.container}>
        <p>
        <HiFilter/>
        دسته بندی
        </p>
        <Link href={"/buy-residential"}>همه</Link>
        <Link href={{pathname:"/buy-residential",query:{category:CATEGORY.VILLA}}}>ویلا</Link>
        <Link href={{pathname:"/buy-residential",query:{category:CATEGORY.APARTMENT}}}>آپارتمان</Link>
        <Link href={{pathname:"/buy-residential",query:{category:CATEGORY.STORE}}}>مغازه</Link>
        <Link href={{pathname:"/buy-residential",query:{category:CATEGORY.OFFICE}}}>دفتر</Link>
       
    </div>
  )
}

export default SideBar