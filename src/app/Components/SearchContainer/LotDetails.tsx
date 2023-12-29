import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


import { HiDocumentSearch } from "react-icons/hi" 


type Props = {
    lotData : StationItemData
}

type StationItemData = {
    ASSY_input: number ;
    Direction: string ;
    Good: number ;
    Lot_id: string ;
    Machine_ID: string ;
    NG: number ;
    Substrate : number ; 
    TTL : number ; 
    Timestamp : string ; 
    badmark  : number ;
    count_id : number ; 
  }

  export default function LotDetails({ lotData }: Props) {
    const Timestamp =lotData.Timestamp.split(" ")
    return (
      <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center'>
        <span className='flex flex-row items-center justify-between'>
          <h1 className='font-light text-xl'>{lotData.Lot_id}</h1>
          <p className='ml-[2vw] text-sm font-extralight'>{Timestamp[4]}</p>
        </span>

        <Link 
          href={`/search/${lotData.Lot_id}-${Timestamp[4]}`}
          className='hover:bg-BaseLightGrey cursor-pointer p-2 rounded-lg mx-[3vw]'>
            <HiDocumentSearch className='text-3xl text-BaseLightCharcoal' />
        </Link>
      </li>
    )
  }