import MainSearchContainer from '@/app/Components/SearchContainer/MainContainer'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <section className='flex flex-col h-full w-full'>
      <MainSearchContainer/>
    </section>
  )
}