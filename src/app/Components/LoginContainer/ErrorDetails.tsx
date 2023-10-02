import React from 'react'

type Props = {
    message : string 

}

export default function ErrorDetails( { message } : Props) {
  return (
    <p className='pl-5 mt-3 text-red-400 font-medium'>
        {message}
    </p>
  )
}