"use client"

import React from 'react'
import AuthForm from './AuthForm'

type Props = {
    serverResponse :{
        status : number ,
        message : string ,
        isConfirm : boolean 
    }
}

export default function AuthContainer() {


    const onRequestToServer = async (username: string, password: string) => {
        // try {
        //     const response = await fetch(`someloginvalidation`,{
        //         method : 'GET',
        //         body : JSON.stringify({username,password}),
        //         headers : {
        //             'Content-type' : 'validation test'
        //         }
        //     })
        //     if (response.ok){
        //         if (response.isConfirm === true ){
        //              setCookies storages  
        //             return response.data
        //         }
        //         return response.data
        //     }
        // }catch(err){
        //     return response.data
        // }

        // } catch (error) {
        //   console.error('Error during authentication:', error);
        //   return false;
        // }
        return {
            status : 200,
            message : "good",
            isConfirm : true
        }
      };
      
  return (
    <div className='flex flex-col justify-center shadow-2xl p-10 rounded-3xl bg-gray-0 h-full'>
        <h1 className=' text-4xl pl-10 mb-5 font-normal' >Admin</h1>
        <AuthForm onRequestToServer={onRequestToServer}/>
    </div>   
  )
}