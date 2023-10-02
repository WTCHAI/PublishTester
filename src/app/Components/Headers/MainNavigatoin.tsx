'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function MainNavigation({}: Props) {
    //get is login state 
    const [isTokenValid,setToken] = useState(false)

    useEffect(()=>{
      //get cookies then check is have token 
    },[])

  return (
    <header className='py-7 flex justify-center w-full shadow-lg'>
        <div className={`flex flex-row justify-${isTokenValid ? 'between px-16' : 'center'} text-center w-full`}>
            <h1 className={`justify-center flex ${isTokenValid ? 'text-3xl': 'text-2xl'} items-center`}>Machine statment logo</h1>
            { isTokenValid &&
            <ul className='flex flex-row justify-between items-center gap-7'>
              <li className='flex justify-center hover:bg-slate-200 px-3 py-2 rounded-lg hover:text-blue-400'><Link href="dashboard" className=''>Mechine Current state</Link></li>
              <li className='flex justify-center hover:bg-slate-200 px-3 py-2 rounded-lg hover:text-blue-400'><Link href="search">Find target Lot Id</Link></li>
            </ul>
            }
        </div>
    </header>
  )
}