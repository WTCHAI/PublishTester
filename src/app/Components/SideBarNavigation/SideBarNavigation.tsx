"use client"

import React , { useEffect, useState } from "react";
import MenuBar from "./MenuBar";

import { BiSearchAlt } from "react-icons/bi"
import { MdDashboard } from "react-icons/md"
import { IoIosSettings } from "react-icons/io"
import { AiOutlineLogout } from "react-icons/ai"
import { AiOutlineLogin } from "react-icons/ai"


type Props = {

}



export default function SideBar({}: Props) {
  // check is Token is valid 
  // useEffect(()=>{
  //   //check is token is valid since start
  //   //is toke valid varible
  //   setIsLogIn(true)
  // },[])

  // const [isLoggedIn,setIsLogIn] = useState(false) ; 
  const isLoggedIn = true
  return (
    <nav className="flex flex-col justify-between max-h-screen shadow-xl bg-BaseLightGrey py-[4vh]  text-BaseCharcoal transition-all">
        <ul  className="flex flex-col w-full">
          <li className='flex flex-row w-full duration-500 transition-transform hover:bg-black hover:bg-opacity-5  py-[3vh] px-[2vw] lg:text-lg items-center hover:cursor-pointer'>
            <MdDashboard className="text-2xl mr-[1vw]"/>
            <MenuBar props={{type : "Dashboard"}}/>
          </li>
          <li className='flex flex-row w-full duration-500 transition-transform hover:bg-black hover:bg-opacity-5  py-[3vh] px-[2vw] lg:text-lg items-center hover:cursor-pointer'>
            <BiSearchAlt className="text-2xl mr-[1vw]"/>
            <MenuBar props={{type : "Search"}}/>
          </li>
        </ul>
        <ul className="flex flex-col">
          <li className='flex flex-row w-full duration-500 transition-transform hover:bg-black hover:bg-opacity-5  py-[3vh] px-[2vw] lg:text-lg items-center hover:cursor-pointer'>
            <IoIosSettings className="text-2xl mr-[1vw]"/>
            <MenuBar props={{ type : "Setting"}}/>
          </li>
        </ul>
    </nav>
  )
}