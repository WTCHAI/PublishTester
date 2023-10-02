import "./globals.css"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import React from 'react'
import MainNavigation from "./Components/Headers/MainNavigatoin"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Machine status',
  description: 'sony',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return <html>
    <body className="bg-BaseWhite overflow-hidden">
      <MainNavigation />
      {children}
    </body>
  </html>
}
