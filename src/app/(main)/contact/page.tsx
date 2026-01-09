'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { RiLoader4Fill } from 'react-icons/ri'

const page = () => {
    const [formDetails, setFormDetails] = useState({
        email: '',
        name: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)


const handleSubmit = async (e: any)=>{
    e.preventDefault()
    if(loading)
        return
    setLoading(true)
    try{
        const sendEmailRes =  await axios.post("/api/sendUserEmail", formDetails, {
            headers: {
                "Content-Type": "text/html",
            },
        } );

        if (sendEmailRes?.status === 200) {
            window.alert("Message sent");
            setFormDetails({
                email: '',
                name: '',
                message: ''
            })
        } else {
            window.alert("An error occurred. Please try again.");
        } 
    }
    catch(err){
        window.alert("An error occurred. Please try again.");
    }finally{
        setLoading(false)
    }
     
   
}

  return (
    <>{
        loading && <div className='h-screen w-full bg-black/40 grid place-items-center fixed top-0 left-0'>
            <RiLoader4Fill className='h-[1.8rem] w-[1.8rem] animate-spin text-white' />
        </div>
    }
     <div className="mt-1 mb-10">
        <p className='font-semibold text-xl'>Let's Talk!</p>
      <form onSubmit={handleSubmit} className='max-w-md my-3 flex flex-col gap-3' >
        <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' placeholder='Your name' 
            onChange={(e)=> setFormDetails(prev=> ({...prev, [e.target.name]: e.target.value}))}
            className='border border-[#272727] p-2 w-full' required/>
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input type="mail" id='email' placeholder='Enter email' name='email' 
               onChange={(e)=> setFormDetails(prev=> ({...prev, [e.target.name]: e.target.value}))}
            className='border border-[#272727] p-2 w-full' required/>
        </div>

        <div className='flex flex-col gap-1'>
            <label htmlFor="message">Message</label>
            <textarea rows={5} id='message' name='message' placeholder='Leave a message' 
               onChange={(e)=> setFormDetails(prev=> ({...prev, [e.target.name]: e.target.value}))}
            className='border border-[#272727] p-2 w-full' required/>
        </div>

        <button className='flex ml-auto bg-[#272727] text-white p-2 px-4'>Submit</button>
      </form>
    </div>
    </>
   
  )
}

export default page
