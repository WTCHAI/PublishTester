"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'; // Import the 'useState' hook


import { BiSearchAlt } from "react-icons/bi"


type Props = {
  onUpdateData : (inputData : {lotId : string , lotDate : string})=>void,
}

export default function Searcher({onUpdateData}: Props) {
  const [LotValue, setInputValue] = useState('')
  const [LotDate, setDateValue] = useState(new Date().toISOString().split('T')[0])
  // check if input was exist on browser 
  
  useEffect(() => {
    const storedValue = sessionStorage.getItem('lotValue');
    const storedDate = sessionStorage.getItem("lotDate")
    if (storedValue) {
      setInputValue(storedValue);
    }
    if (storedDate){
      setDateValue(storedDate)
    }
  }, []);

  const onSetupLotValue = (targetValue : string )=>{
    setInputValue(targetValue)
    sessionStorage.setItem("lotValue",`${targetValue}`)
  }
  const onSetupLotDate = (targetValue : string)=>{
    // console.log(targetValue.split('T')[0])
    setDateValue(targetValue)
    sessionStorage.setItem("lotDate",`${targetValue}`)
  }

   const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const prepareData = {lotId : LotValue , lotDate : LotDate}
    onUpdateData(prepareData); // Call the function onUpdateData with the input value
    
    //Reset serch value
    setInputValue("")
    setDateValue(new Date().toISOString().split('T')[0])

    sessionStorage.setItem("lotValue","")
    sessionStorage.setItem("lotDate",`${new Date().toISOString().split('T')[0]}`) 
  } 


  return (
    <form className='flex flex-col items-center w-[50vw] gap-3' onSubmit={onSubmitHandler}>
      <span className='flex flex-row w-full gap-3'>
        <div className='w-full flex md:flex-row px-3 py-2 bg-BaseWhite items-center rounded-lg gap-3 shadow-md text-xl'>
          <BiSearchAlt className="text-xl text-BaseCharcoal"/>
          <input
            type="text"
            className='w-full border-transparent outline-none bg-transparent '
            placeholder='Search target Lot Id'
            value={LotValue} // Bind input value to the state
            onChange={(e)=>onSetupLotValue(e.target.value)} // Update the state on change
          />
        </div>
        <div className='p-3 bg-BaseWhite items-center rounded-lg gap-3 shadow-md text-xl'>
          <input 
            type="date" 
            className='w-full border-transparent outline-none bg-transparent cursor-pointer'
            value={LotDate} // Extract the date part from the ISO string
            onChange={(e) => onSetupLotDate(e.target.value)}  
          ></input>
        </div>
      </span>
      <button 
        type="submit"
        className='px-5 py-2 mt-3 shadow-lg rounded-lg active:scale-105 bg-BaseLightCharcoal text-BaseWhite text-md font-semibold hover:scale-105'      >Search</button>
    </form>
  )
  
}