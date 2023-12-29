"use client"
import React, { useEffect, useState } from 'react';
import SearchHeader from './Headers';
import SearchResult from './Dashboard';
import SearchBar from './Searcher';

type LotItemData = {
  ASSY_input: number;
  Direction: string;
  Good: number;
  Lot_id: string;
  Machine_ID: string;
  NG: number;
  Substrate: number;
  TTL: number;
  Timestamp: string;
  badmark: number;
  count_id: number;
}

type DataFromServer = {
  LotData: LotItemData[];
  serverStatus: boolean;
};

export default function MainSearchContainer() {
  const [dataFromServer, setData] = useState<DataFromServer>({
    serverStatus: false,
    LotData: []
  })

  // send check to server and get feedbackfrom backend is find get data back iun form of {}
  // await fetch data from server by using key from targetData
  const onUpdatedDataFromServer = async (targetData: { lotId: string; lotDate: string }) => {
    //get data from fetch return station data 
    // const response : any = await fetch (`http://172.29.192.1:5000/api/countrecords_counttray/${targetData.lotId}`)
    // const data = response.json().data
    
    const stationData: LotItemData[] = [
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
      }
    ]

    const prepareData: DataFromServer = {
      serverStatus: true ,
      LotData : stationData
    }

    //set up all lot Data into session storage 
    sessionStorage.setItem("lotData",`${JSON.stringify(stationData)}`)
    //set state change showing result 
    setData(prepareData)
  }

  useEffect(()=>{
    const isStored = sessionStorage.getItem("lotData")
    if (isStored){
      const LotsData : any = sessionStorage.getItem("lotData")
      const prepareData: DataFromServer = {
        serverStatus: true ,
        LotData : JSON.parse(LotsData)
      }
      setData(prepareData)
    }
  },[])

  return (
    <section className='flex flex-col h-[97vh] justify-center items-center mx-[2vw]'>
      <SearchHeader />
      <SearchBar onUpdateData={onUpdatedDataFromServer} />
      <SearchResult dataFromServer={dataFromServer} />
    </section>
  );
}
