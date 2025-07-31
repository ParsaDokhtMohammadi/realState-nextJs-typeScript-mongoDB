import BuyResidentialsPage from '@/components/template/BuyResidentialsPage'
import React from 'react'
import { IProfile } from "@/types/Interfaces"
import connectDB from '@/utils/connectDB'
import Profile from '@/models/Profile'


const BuyResidentials = async() => {
  await connectDB()
  const data: IProfile[] = await Profile.find()
  
  return (
    <BuyResidentialsPage data={data}></BuyResidentialsPage>
  )
}

export default BuyResidentials