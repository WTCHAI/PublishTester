"use client"

import React, { useEffect, useState } from 'react';

type Props = {
  targetLotID: string;
};

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

export default function TargetLot({ targetLotID }: Props) {
  const [lotData, setTargetData] = useState<LotItemData[] | null>(null);
  const lotDetails = targetLotID.split("-")
  const decodedTime = decodeURIComponent(lotDetails[1])
  useEffect(() => {
    // Retrieve data from sessionStorage
    const storedData = sessionStorage.getItem(`lotData`);
    if (storedData) {
      // Parse the JSON string to convert it into an object
      const parsedData: LotItemData[] = JSON.parse(storedData);
      // Set the parsed data in the state filter and find the target one
      const prepareData = parsedData.filter((e: LotItemData) => {
        if (e.Lot_id === lotDetails[0] && e.Timestamp.split(" ")[4] === decodedTime)
          return e
        });
      setTargetData(prepareData);
    }
  }, [targetLotID]);

  // Destructure the array to get the first element directly
  const [firstTargetData] = lotData || [];

  return (
    <section className='w-full rounded-lg mt-[3vh] justify-center items-center'>
      {firstTargetData && (
            <div className='rounded-2xl flex flex-col items-center w-[full] h-full'>
              <ul className='flex flex-col justify-center rounded-xl shadow-xl items-center w-[50vw]'>
                  <li className='w-full text-center bg-BaseLightGrey rounded-t-xl py-[2vh]'><h1 className='text-xl font-semibold tracking-tight leading-tight'>MachineID : {firstTargetData.Machine_ID}</h1></li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>Lot Id : {firstTargetData.Lot_id}</li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>Direction : {firstTargetData.Direction}</li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>Good : {firstTargetData.Good}</li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>badmark : {firstTargetData.badmark}</li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>Assy : {firstTargetData.ASSY_input}</li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>NG : {firstTargetData.NG}</li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>Substrate : {firstTargetData.Substrate}</li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>TTL : {firstTargetData.TTL}</li>
                  <li className='flex flex-row justify-between w-full py-[2vh] border-b-2 px-[2vw] items-center tracking-tight leading-tight'>Timestamp : {firstTargetData.Timestamp}</li>
              </ul>        
            </div>
      )}
    </section>
  );
}
