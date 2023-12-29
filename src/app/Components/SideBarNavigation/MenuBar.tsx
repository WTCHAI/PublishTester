import Link from 'next/link'
import React from 'react'
import { FaSearch } from "react-icons/fa";

type Props = {
    props : {
        type : string 
    }
}

export default function MenuBar({ props }: Props) {
    const lowerText : string = props.type.toLowerCase()
  return (
    <Link href={`/${lowerText}`}>
      <p className='tracking-tight leading-tight text-xl'>{props.type}</p>
    </Link>
  )
}