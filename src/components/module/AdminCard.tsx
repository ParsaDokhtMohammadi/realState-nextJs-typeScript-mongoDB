"use client"
import styles from "@/components/module/AdminCard.module.css"
import { IProfile, IResponse } from "@/types/Interfaces"
import { sp } from "@/utils/replaceNumber"
import { useRouter } from "next/navigation"
import { Toaster , toast } from "react-hot-toast"
const AdminCard = ({data} : {data:IProfile}) => {
    const router = useRouter()
    const publishHandler = async() =>{
        const res = await fetch(`/api/published/${data._id}`,{
            method:"PATCH"
        })
        const messageData:IResponse = await res.json()
        if(messageData.message){
            toast.success(messageData.message)
            
        }
        else if(messageData.error){
            toast.error(messageData.error) 
        }
        router.refresh()
    }
  return (
    <div className={styles.container}>
        <Toaster/>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className={styles.properties}>
            <span>{data.location}</span>
            <span>{sp(data.price)}</span>
        </div>
        <button onClick={publishHandler}>اتشار</button>
    </div>
  )
}

export default AdminCard