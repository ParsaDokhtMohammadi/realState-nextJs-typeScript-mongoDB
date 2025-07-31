import BuyResidentialsPage from '@/components/template/BuyResidentialsPage'
import React from 'react'
import { IProfile } from "@/types/Interfaces"
import connectDB from '@/utils/connectDB'
import Profile from '@/models/Profile'


const BuyResidentials = async() => {
  await connectDB()
  const profiles: IProfile[] = await Profile.find()
  console.log(profiles);
  return (
    <BuyResidentialsPage ></BuyResidentialsPage>
  )
}

export default BuyResidentials