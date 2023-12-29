import React from 'react'

type Props = {
    statusData : any ,
    stationCount : number 
}

export default function MachineStatus({ statusData ,stationCount}: Props) {
  return (
      <div className='rounded-lg bg-BaseWhite py-[1vh] px-[2vw] mx-[1vw] my-[2vh] shadow-lg'>
        <nav className='flex justify-center'>
            <h5 className='text-BaseCharcoal text-2xl font-semibold tracking-tight leading-tight'>Station {stationCount}</h5>
        </nav>
        <p className='tracking-tight leading-tight'>Machine id : {statusData.Machine_ID}</p>
        <p className='tracking-tight leading-tight'>Lot id : {statusData.Lot_id}</p>
        <p className='tracking-tight leading-tight'>Assy input : {statusData.ASSY_input}</p>
        <p className='tracking-tight leading-tight'>Direction : {statusData.Direction}</p>   
        <p className='tracking-tight leading-tight'>Good : {statusData.Good}</p>
        <p className='tracking-tight leading-tight'>Bad : {statusData.badmark}</p>
        <p className='tracking-tight leading-tight'>NG : {statusData.NG}</p>
        <p className='tracking-tight leading-tight'>Substrate : {statusData.Substrate}</p>
        <p className='tracking-tight leading-tight'>TTL : {statusData.TTL}</p>
        <p className='tracking-tight leading-tight'>Time : {statusData.Timestamp}</p>

      </div>
  )
}