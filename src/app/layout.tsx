import "./globals.css"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'fontsource-lora'

import React from 'react'
import SideBar from "./Components/SideBarNavigation/SideBarNavigation"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Machine status',
  description: 'sony',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return <html>
    <body className="flex flex-row h-screen p-0 max-h-screen font-lora bg-BaseLightGrey bg-opacity-40 overflow-hidden w-full" >
      {/* is loggin ? <sideBar/>  else no */}
      {<SideBar/>}
      {children}
    </body>
  </html>
}
