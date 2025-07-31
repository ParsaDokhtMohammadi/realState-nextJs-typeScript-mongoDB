import styles from "@/components/template/HomePage.module.css"
import { FiCircle } from "react-icons/fi"
import { FaCity } from "react-icons/fa"
import CategoryCard from "../module/CategoryCard"
import { CATEGORY } from "@/types/Interfaces"


const HomePage = () => {
    const services = ["خرید","فروش","رهن","اجاره"]
    const cities = [
        "رشت","تهران","اصفهان","لاهیجان","شیراز","مشهد","اهواز","کرج"
    ]
  return (
    <div>
        <div className={styles.banner}>
            <div className={styles.desc}>
                <h1>سامانه خرید و اجاره ملک</h1>
                <ul>
                    {
                        services.map(service=>(
                            <li key={service}>
                                <FiCircle/>
                                <span>{service}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className={styles.categories}>
            <CategoryCard title={"خانه ویلایی"} name={CATEGORY.VILLA}/>
            <CategoryCard title={"آپارتمان"} name={CATEGORY.APARTMENT}/>
            <CategoryCard title={"مغازه"} name={CATEGORY.STORE}/>
            <CategoryCard title={"دفتر"} name={CATEGORY.OFFICE}/>
        </div>
        <div className={styles.city}>
            <h3>شهر های پر بازدید</h3>
            <ul>
                {cities.map(city=>(
                    <li key={city}>
                        <FaCity/>
                        <span>{city}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default HomePage