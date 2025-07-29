"use client"
import styles from "@/components/template/AddProfilePage.module.css"
import { useState } from "react"
import { CATEGORY, IProfile } from "@/types/Interfaces"
import TextInput from "../module/TextInput"
import RadioList from "../module/RadioList"
import TextList from "../module/TextList"
import CustomDatePicker from "../module/CustomDatePicker"

const AddProfilePage = () => {
    const [profileData , setProfileData]=useState<IProfile>({
        title:"",
        description:"",
        location:"",
        phone:"",
        price:"",
        realState:"",
        constructionDate : new Date(),
        category:CATEGORY.NULL,
        rules : [],
        amenities : []
    })
    const submitHandler = async():Promise<void>=>{
      const res = await fetch("/api/profile",{
        method:"POST",
        body:JSON.stringify(profileData),
        headers:{"Content-Type":"application/json"}
      })
      const data = await res.json()
      if(data.error){
        console.log("shit",data);
      }else{
        console.log("we did it",data);
      }
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
      <CustomDatePicker profileData={profileData} setProfileData={setProfileData}/>
      <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
    </div>
  )
}

export default AddProfilePage