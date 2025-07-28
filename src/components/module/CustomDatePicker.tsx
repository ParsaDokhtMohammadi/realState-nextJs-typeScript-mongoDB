import React from 'react'
import styles from "@/components/module/CustomDatePicker.module.css"
import DatePicker, { DateObject } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { IProfileData } from '@/types/Interfaces'
const CustomDatePicker = ({profileData,setProfileData}:IProfileData) => {
    const changeHandler = (e:DateObject | null):void => {
        const date = e ? e.toDate() : new Date()
        setProfileData({...profileData , constructionDate : date})
    }
  return (
    <div className={styles.container}>
        <p>ناریخ ساخت</p>
        <DatePicker
            calendar={persian}
            locale={persian_fa}
            onChange={changeHandler}
            value={profileData.constructionDate}
        ></DatePicker>
    </div>
  )
}

export default CustomDatePicker