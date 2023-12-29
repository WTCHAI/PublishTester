import React, { useState } from 'react'
import MachineStatus from './MachineStatatus'

type Props = {
    stationData : any
}

type LotItemData = {
  ASSY_input: number;
  Direction: string;
  Good: number;
  Lot_id: string;
  Machine_ID: string;
  NG: number;
  Substrate: number;
  TTL: number;
  Timestamp: string;
  badmark: number;
  count_id: number;
}

export default function Dashboard({ stationData }: Props) {
  let stationCount = 0
  return (
    <section className='bg-BaseLightGrey bg-opacity-70 rounded-3xl overflow-y-auto max-h-[88vh] shadow-xl shadow-t'>
        <ul className='flex flex-wrap ' >
            { stationData.map((e : LotItemData)=>{
                stationCount++
                return <li className='lg:w-1/2 w-full xl:1/3 shadow-inherit' key={e.Lot_id+e.Timestamp+e.count_id}>
                    <MachineStatus statusData={e} stationCount={stationCount}/>
                  </li>
            })}
        </ul>
    </section>
  )
}