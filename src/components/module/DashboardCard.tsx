import { IProfile } from '@/types/Interfaces'
import React from 'react'
import Card from './Card'


const DashboardCard = ({data}:{data:IProfile}) => {
  return (
    <div>
       <Card data={data}/>
    </div>
  )
}

export default DashboardCard