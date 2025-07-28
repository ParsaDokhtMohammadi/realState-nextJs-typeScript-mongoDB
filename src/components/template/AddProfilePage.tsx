"use client"
import styles from "@/components/template/AddProfilePage.module.css"
import { useState } from "react"
import { CATEGORY, IProfile } from "@/types/Interfaces"
import TextInput from "../module/TextInput"
import RadioList from "../module/RadioList"
import TextList from "../module/TextList"

const AddProfilePage = () => {
    const [profileData , setProfileData]=useState<IProfile>({
        title:"",
        description:"",
        location:"",
        phone:"",
        price:"",
        realState:"",
        constructionDate : new Date(),
        category:CATEGORY.VILLA,
        rules : [],
        amenities : []
    })
    const submitHandler = ():void =>{
      console.log(profileData);
    }
  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>
      <TextInput 
      title="عنوان آگهی" 
      name="title" 
      profileData={profileData} 
      setProfileData={setProfileData}></TextInput>
      <TextInput 
      title="توضیحات"
      name="description" 
      profileData={profileData} 
      setProfileData={setProfileData}
      textArea={true}></TextInput> 
      <TextInput 
      title="آدرس" 
      name="location" 
      profileData={profileData} 
      setProfileData={setProfileData}></TextInput>
      <TextInput 
      title="شماره تماس" 
      name="phone" 
      profileData={profileData} 
      setProfileData={setProfileData}></TextInput>
      <TextInput 
      title="قیمت(تومان)" 
      name="price" 
      profileData={profileData} 
      setProfileData={setProfileData}></TextInput>
      <TextInput 
      title="بنگاه" 
      name="realState" 
      profileData={profileData} 
      setProfileData={setProfileData}></TextInput>
      <RadioList profileData={profileData} setProfileData={setProfileData}></RadioList>
      <TextList
      title="امکانات رفاهی" 
      profileData={profileData}
      setProfileData={setProfileData} 
      type="ameneties"
      ></TextList>
      <TextList
      title="قوانین" 
      profileData={profileData}
      setProfileData={setProfileData} 
      type="roles"
      ></TextList>
      <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
    </div>
  )
}

export default AddProfilePage