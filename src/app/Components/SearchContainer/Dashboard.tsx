
import React from 'react'

import LotDetails from './LotDetails';

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

type DataFromServer = {
  LotData: LotItemData[];
  serverStatus: boolean;
};

type Props = {
  dataFromServer : DataFromServer
}

export default function Dashboard({dataFromServer}: Props) {

  return (
    <section className='w-full rounded-lg mt-[3vh] h-full shadow-2xl tracking-tight leading-tight`'> 
      <ul className={`flex flex-col items-center w-full `}>
            <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] bg-BaseLightGrey rounded-t-lg'>
                <h3 className='text-2xl font-bold pl-[1.5vw] tracking-tight leading-tight '>Lot Id</h3>
                <p className='text-2xl font-bold tracking-tight leading-tight'>More details!</p>
              </li>
            {dataFromServer.LotData.length != 0 && dataFromServer.LotData.map((element:LotItemData)=>{
              return <LotDetails key={element.Lot_id} lotData={element}/>
            })}
            {dataFromServer.LotData.length == 0 && dataFromServer.serverStatus && <li className='flex flex-row justify-center w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>Search Some Lot Id!</li>}
            {!dataFromServer.serverStatus && <li className='flex flex-row justify-center items-center w-full py-[2vh] border-b-2 px-[2vw] tracking-tight leading-tight' >Lot id not founded</li>}
      </ul>
    </section>  
  )
}
