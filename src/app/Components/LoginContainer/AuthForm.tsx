'use client'

import React, { useEffect, useState } from 'react'
import ErrorDetails from './ErrorDetails'


type Props = {onRequestToServer : (username : string , password : string ) => Promise<any>  }

export default function AuthForm ({ onRequestToServer }: Props) {
    


    const [formData,setFormData] = useState({
        username : "",
        password : "",
    })

    const [formStatus,setFormValid] = useState({
        isFormValid : false ,
        isUserNameValid : true , 
        isPasswordValid : true 
    })

    const [isClick,setIsClick] = useState({
        isUsernameClicked : false ,
        isPasswordClicked : false 
    })

    const [isLoading,setLoading] = useState(false)

    useEffect(()=>{
        console.log("form is valid sending request to server")
        const response = onRequestToServer(formData.username,formData.password)

    },[formStatus.isFormValid])
    
    // set state is Click or not 
    const onFocusInputHandle = (target : string)=>{
        if (target === "username"){
            setIsClick({
                ...isClick , 
                isUsernameClicked : true 
            })
        }
        if (target === "password"){
            setIsClick({
                ...isClick , 
                isPasswordClicked : true 
            })
        }
    }

    const onBlurInputHandler = (target : string)=>{
        if (target === "username"){
            setIsClick({
                ...isClick , 
                isUsernameClicked : false 
            })
        }
        else if (target === "password"){
            setIsClick({
                ...isClick , 
                isPasswordClicked : false 
            })
        }
    }

    //form validation 
    const onCheckFormIsValid = ()=>{
        const usernameCheck = ( formData.username != "" && formData.username.length >= 6 ) ? true : false
        const passwordCheck = (formData.password != "" && formData.password.length >= 6 ) ? true : false 
        //set username and password is valid ?
        setFormValid({
            ...formStatus,
            isUserNameValid : usernameCheck ,
            isPasswordValid : passwordCheck , 
            isFormValid : usernameCheck && passwordCheck
        })
    }


    const onSubmitHandler = (e : any)=>{
        e.preventDefault()
        onBlurInputHandler("username")
        onBlurInputHandler("password")

        //check is valid is just first step to go to sent request to server to get token 
        onCheckFormIsValid()

        if (formStatus.isFormValid){
            console.log("login loading...")
        }
    }   

  return (
        <form className='flex flex-col justify-center gap-5' onSubmit={onSubmitHandler}>
            <div className='flex flex-col ' >
                <label htmlFor='username' className='text-xl mb-3 font-normal'>Users</label>
                <input 
                    type='text' 
                    id='username' 
                    className='ml-3 py-3 px-4 rounded-xl' 
                    value={formData.username}
                    onFocus={()=>{
                        console.log("username focus don't show ")
                        onFocusInputHandle("username")
                    }}
                    onChange={(e)=>setFormData({...formData,username : e.target.value})}
                    placeholder='Enter your username'
                    />
                <ErrorDetails message={!isClick.isUsernameClicked && !formStatus.isUserNameValid ? "Username isn't valid please check again" : ""}/>          
            </div>
            <div className='flex flex-col '>
                <label htmlFor='password' className='text-xl mb-3 font-normal'>Password</label>
                <input 
                    type="password"
                    id='password'
                    className='ml-3 py-3 px-4 rounded-xl'
                    value={formData.password}
                    onFocus={()=>{
                        console.log("password focus don't show ")
                        onFocusInputHandle("password")}}
                    onChange={(e)=>setFormData({...formData , password : e.target.value})}
                    placeholder='Enter your password'
                />                
                <ErrorDetails message={!isClick.isPasswordClicked && !formStatus.isPasswordValid ? "Password isn't valid please check again" : ""}/>          

            </div>
            {/* {formStatus.isFormValid && <p>Form Valid</p>} */}
            <div className='m-5'>
                <button type="submit" className='w-full bg-sky-700 py-2 rounded-lg text-BaseWhite'>Login</button>

            </div>
        </form>

  )
}