import styles from "@/components/template/DashboardPage.module.css"

type props = {createdAt ?: Date}
const DashboardPage = ({createdAt}:props) => {
   
  return (
    <div className={styles.container}>
        <h3>سلام</h3>
        <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
        <div className={styles.createdAt}>
            <p>تاریخ عضویت:</p>
            <span>{createdAt ? new Date(createdAt).toLocaleDateString("fa-IR"):"تاریخ نامشخص"}</span>
        </div>
    </div>
  )
}

export default DashboardPage