import styles from "@/components/template/HomePage.module.css"
import { FiCircle } from "react-icons/fi"

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
    </div>
  )
}

export default HomePage