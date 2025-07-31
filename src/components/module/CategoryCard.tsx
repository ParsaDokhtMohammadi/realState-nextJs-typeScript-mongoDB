import styles from "@/components/module/CategoryCard.module.css"
import Image from "next/image"
import Link from "next/link"

const CategoryCard = ({name , title}:{name:string,title:string}) => {
  return (
    <div className={styles.card}>
        <Link href={`/buy-residential?category=${name}`}>
        <Image src={`/images/${name}.png`} alt={title} width={240} height={144} priority={true}/>
        </Link>
        <p>{title}</p>
    </div>
  )
}

export default CategoryCard