"use client"
import SearchHeader from '@/app/Components/SearchContainer/Headers';
import TargetLot from '@/app/Components/SearchContainer/TargetLot';
import React, { useEffect, useState } from 'react';

export default function Pages({ params }: any) {
  const [targetLotID, setTargetLotID] = useState('');

  useEffect(() => {
    // Perform any asynchronous operations here if needed
    // For example, fetch data based on targetLotID
    setTargetLotID(params.Id);
  }, [params.Id]);


  const onBackward = (e :React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    window.history.back()
  }

  return (
    <section className='h-full flex flex-col mx-[2vw] w-full my-[1vh]'>
      <SearchHeader/>
      <TargetLot targetLotID={targetLotID} />
      <button 
        className='mt-[4vh] mx-[35vw] bg-BaseLightGrey py-[1vh] shadow-lg items-center justify-center rounded-xl hover:bg-black hover:bg-opacity-10 text-lg font-medium'
        onClick={onBackward}
      >Go back</button>
    </section>
  )
}
