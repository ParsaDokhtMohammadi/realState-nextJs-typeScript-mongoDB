"use client"
import { useRouter } from 'next/navigation'
import { IProfile, IResponse } from '@/types/Interfaces'
import Styles from "@/components/module/DashboardCard.module.css"
import Card from './Card'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast'
const DashboardCard = ({data}:{data:IProfile}) => {
  const router = useRouter()
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`)
  }
  const deleteHandler = async()=>{
    const res = await fetch(`/api/profile/delete/${data._id}`,{
      method:'DELETE'
    })
    const messageData:IResponse =await res.json()
    if(messageData.error){
      toast.error(messageData.error)
    }
    else if (messageData.message){
      toast.success(messageData.message)
      router.refresh()
    }
  }

  return (
    <div className={Styles.container}>
      <Toaster></Toaster>
       <Card data={data}/>
       <div className={Styles.main}>
      <button onClick={editHandler}>
        ویرایش
        <FiEdit/>
      </button>
      <button onClick={deleteHandler}>
        حذف
        <AiOutlineDelete/>
      </button>
       </div>
    </div>
  )
}

export default DashboardCard 