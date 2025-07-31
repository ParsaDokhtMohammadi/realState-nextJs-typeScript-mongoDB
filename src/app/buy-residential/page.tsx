import BuyResidentialsPage from '@/components/template/BuyResidentialsPage'
import React from 'react'
import { CATEGORY, IProfile } from "@/types/Interfaces"
import connectDB from '@/utils/connectDB'
import Profile from '@/models/Profile'


const BuyResidentials = async({searchParams}:{searchParams:{category:CATEGORY}}) => {
  
  await connectDB()
  const data: IProfile[] = await Profile.find()
  let finalData = data
  if (searchParams.category){
   finalData = finalData.filter(datum=>datum.category===searchParams.category)
  }
  return (
    <BuyResidentialsPage data={finalData}></BuyResidentialsPage>
  )
}

export default BuyResidentials