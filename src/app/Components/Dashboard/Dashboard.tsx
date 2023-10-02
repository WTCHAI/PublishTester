import React, { useState } from 'react'

type Props = {}

export default function Dashboard({}: Props) {
    const [stations,setStation] = useState({})
    
    const onGetStations = async ()=>{
        try{
            const response : any = fetch('From backend localhost lasted data',{
                method : "GET",
            })
            setStation(response.data )
        }catch(err){

        }
    }

  return (
    <div>
        {}
    </div>
  )
}