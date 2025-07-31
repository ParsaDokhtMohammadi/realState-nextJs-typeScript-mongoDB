"use client"
import styles from "@/components/template/AddProfilePage.module.css"
import { useEffect, useState } from "react"
import { CATEGORY, IProfile, IResponse } from "@/types/Interfaces"
import TextInput from "../module/TextInput"
import RadioList from "../module/RadioList"
import TextList from "../module/TextList" 
import CustomDatePicker from "../module/CustomDatePicker"
import toast, { Toaster } from "react-hot-toast"
import Loader from "../module/Loader"
import { useRouter } from "next/navigation"
const AddProfilePage = ({ data }: { data: IProfile|undefined }) => {
  const router = useRouter()
  const [profileData, setProfileData] = useState<IProfile>({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: CATEGORY.NULL,
    rules: [],
    amenities: []
  })
  const [loading , setLoading] = useState<boolean>(false)

  useEffect(()=>{
    if(data)setProfileData(data)
  },[])

  const submitHandler = async (): Promise<void> => {
    setLoading(true)
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" }
    })
    const data:IResponse = await res.json()
    setLoading(false)
    if (data.error) {
      toast.error(data.error)
    } else if (data.message) {
      toast.success(data.message)
      router.refresh()
    }
  }
  const editHandler = async() =>{
    setLoading(true)
    const res = await fetch("/api/profile",{
      method:"PATCH",
      body:JSON.stringify(profileData),
      headers:{"Content-Type":"application/json"}
    })
    const data:IResponse = await res.json()
    setLoading(false)
    if(data.error){
      toast.error(data.error)
    }else if(data.message){
      toast.success(data.message)
      router.refresh()
    }

  }
  return (
    <>
      <Toaster></Toaster>
      <div className={styles.container}>
        <h3>{data ?"ویرایش آگهی":"ثبت آگهی"}</h3>
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
        <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />
       {loading ?(
        <Loader></Loader>
       ):data?(
         <button className={styles.submit} onClick={editHandler}>ویرایش آگهی</button>
      ):(
         <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>

       )
       }
      </div>
    </>
  )
}

export default AddProfilePage