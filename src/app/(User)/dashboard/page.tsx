import DashboardContainer from '@/app/Components/Dashboard/MainContainer'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  
  return (
    <div className='flex flex-col'>
      <p>test dash</p>
      <DashboardContainer/>
    </div>
  )
}