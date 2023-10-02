'use client'

import AuthContainer from '@/app/Components/LoginContainer/AuthContainer'
import React from 'react'


export default function page() {
  return (
    <div className="m-10 max-w-2xl w-full h-min">
      <AuthContainer />
    </div>
  )
}