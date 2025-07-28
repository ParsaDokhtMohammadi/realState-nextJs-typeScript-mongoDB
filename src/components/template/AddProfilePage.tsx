"use client"
import styles from "@/components/template/AddProfilePage.module.css"
import { useState } from "react"
import { CATEGORY, IProfile } from "@/types/Interfaces"

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
  return (
    <div>AddProfilePage</div>
  )
}

export default AddProfilePage