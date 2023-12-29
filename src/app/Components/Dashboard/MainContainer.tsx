"use client"

import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import LoadingDashboard from '../Loading/Dashboard'

type Props = {

}

export default function DashboardContainer({}: Props) {
  const stationData = [
      {
          "ASSY_input": 1343,
          "Direction": "out",
          "Good": 1343,
          "Lot_id": "Y326360TL.01",
          "Machine_ID": "MC01",
          "NG": 0,
          "Substrate": 144,
          "TTL": 1728,
          "Timestamp": "Tue, 19 Sep 2023 04:53:56 GMT",
          "badmark": 385,
          "count_id": 1
      },
      {
          "ASSY_input": 1428,
          "Direction": "out",
          "Good": 1428,
          "Lot_id": "Y326360TL.02",
          "Machine_ID": "MC02",
          "NG": 0,
          "Substrate": 144,
          "TTL": 1728,
          "Timestamp": "Tue, 19 Sep 2023 04:55:56 GMT",
          "badmark": 300,
          "count_id": 2
      },
      {
          "ASSY_input": 1343,
          "Direction": "in",
          "Good": 1343,
          "Lot_id": "Y326360TL.01",
          "Machine_ID": "MC03",
          "NG": 0,
          "Substrate": 144,
          "TTL": 1728,
          "Timestamp": "Tue, 19 Sep 2023 04:58:56 GMT",
          "badmark": 385,
          "count_id": 3
      },
      {
          "ASSY_input": 1378,
          "Direction": "out",
          "Good": 1370,
          "Lot_id": "Y326360TL.03",
          "Machine_ID": "MC04",
          "NG": 8,
          "Substrate": 144,
          "TTL": 1728,
          "Timestamp": "Tue, 19 Sep 2023 04:58:58 GMT",
          "badmark": 350,
          "count_id": 4
      },
      {
          "ASSY_input": 1428,
          "Direction": "in",
          "Good": 1428,
          "Lot_id": "Y326360TL.02",
          "Machine_ID": "MC05",
          "NG": 0,
          "Substrate": 144,
          "TTL": 1728,
          "Timestamp": "Tue, 19 Sep 2023 04:59:16 GMT",
          "badmark": 300,
          "count_id": 5
      },
      {
          "ASSY_input": null,
          "Direction": "in",
          "Good": 1343,
          "Lot_id": "Y326360TL.01",
          "Machine_ID": "MC06",
          "NG": null,
          "Substrate": null,
          "TTL": null,
          "Timestamp": "Tue, 19 Sep 2023 04:59:56 GMT",
          "badmark": null,
          "count_id": 6
      },
      {
        "ASSY_input": 1428,
        "Direction": "in",
        "Good": 1428,
        "Lot_id": "Y326360TL.02",
        "Machine_ID": "MC07",
        "NG": 0,
        "Substrate": 144,
        "TTL": 1728,
        "Timestamp": "Tue, 19 Sep 2023 04:59:16 GMT",
        "badmark": 300,
        "count_id": 5
    },
    {
      "ASSY_input": 1428,
      "Direction": "in",
      "Good": 1428,
      "Lot_id": "Y326360TL.02",
      "Machine_ID": "MC08",
      "NG": 0,
      "Substrate": 144,
      "TTL": 1728,
      "Timestamp": "Tue, 19 Sep 2023 04:59:16 GMT",
      "badmark": 300,
      "count_id": 5
  },
  {
    "ASSY_input": 1428,
    "Direction": "in",
    "Good": 1428,
    "Lot_id": "Y326360TL.02",
    "Machine_ID": "MC09",
    "NG": 0,
    "Substrate": 144,
    "TTL": 1728,
    "Timestamp": "Tue, 19 Sep 2023 04:59:16 GMT",
    "badmark": 300,
    "count_id": 5
}
  ]

  // const [stationData,setStation] = useState({})
    const [dashboardStatus,setDashboardStatus] = useState({
      isLoading : false , 
    })  

    useEffect(() => {
      //check in session storage is dat is already valid 
      
      const isStored = sessionStorage.getItem("stationData")
      if (isStored){
        // get data from session u
      }else {
        // get data from server call onGetStations
      }

      // Simulate a delay of 4 seconds before changing isLoading to false      
      setDashboardStatus((prevStatus) => ({
        ...prevStatus,
        isLoading : true 
      }))
      const loadingTimeout = setTimeout(() => {
        setDashboardStatus((prevStatus) => ({
          ...prevStatus,
          isLoading: false,
        }));
      }, 1000)
      // Clear the timeout on component unmount (cleanup)

      return () => clearTimeout(loadingTimeout);

    }, []);

  const onGetStations = async ()=>{
      try{
        //get dashboard every data 
          const response : any = fetch(`http://localhost:5000/api/countrecords_counttray`,{
              method : "GET",
          })
          const data = response.json()
          sessionStorage.setItem("stationData",`${stationData}`)

      }catch(err){
        console.error('Error fetching records:', err)
      }
  }

  return (
    <section className='mx-[2vw]'>
      <h1 className='text-center text-4xl mt-[3vh] mb-[2vh] text-BaseCharcoal tracking-tight leading-tight'>Machine statement</h1>
      { !dashboardStatus.isLoading && <Dashboard stationData={stationData}/> }
      { dashboardStatus.isLoading && <LoadingDashboard/> }
    </section>
  ) 
}