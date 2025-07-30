"use client"
import { IProfile } from '@/types/Interfaces'
import Styles from "@/components/module/DashboardCard.module.css"
import Card from './Card'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
const DashboardCard = ({data}:{data:IProfile}) => {
  const editHandler = () => {

  }
  const deleteHandler =()=>{

  }

  return (
    <div className={Styles.container}>
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