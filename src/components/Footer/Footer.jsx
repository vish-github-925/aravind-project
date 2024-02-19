import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/contact")
    }
  return (
    <footer className='flex flex-col bg-black text-white md:px-40 md:py-20 px-10 mt-10 py-10'>
        <div className='flex flex-col w-full space-y-10 md:space-y-0
         md:flex-row  justify-between items-center'>
            <div className='h-2/3 md:h-full  w-full md:w-1/2 flex flex-col space-y-8 md:justify-normal md:space-y-3 items-start '>
                    <span className=' font-medium text-3xl'>Because water should be free</span>
                <span className='text-md'>Help us spread the word and share our movement with your friends and family</span>
                <button onClick={handleClick} className='px-2 py-1 active:scale-95 ease-linear rounded text-white bg-blue-600 cursor-pointer hover:bg-blue-500'>Contact Us</button>
            </div>
            <div className='h-1/3 md:h-full flex flex-col md:space-y-5 space-y-5 md:items-start md:pl-40 md:justify-start w-full md:w-1/2'>
                <div className='flex items-center justify-center'>
                    <span className="material-symbols-outlined text-lg">mail</span>
                    <span className='text-sm'>&nbsp; -&nbsp; aquaads@righttofreewater.io</span>
                </div>
                <div className='flex items-center justify-center'>
                    <span className="material-symbols-outlined text-lg">whatshot</span>
                    <span className='text-sm'>&nbsp; - &nbsp;   <a target='blank' href="https://wa.me/9700111520">+919700111520</a></span>
                </div>
                <div className='flex items-center justify-center'>
                    <span className="material-symbols-outlined text-lg">call</span>
                    <span className='text-sm'>&nbsp; - &nbsp;  +919700111520</span>
                </div>
            </div>
        </div>
        <div className='flex-col items-center '>
            <span className='text-sm md:text-sm h-full flex items-center justify-center mt-5'>© 2024  Copyright 'Aqua Ads' All Rights Reserved</span>
            <div className='flex justify-center items-center h-full mt-5 hover:cursor-pointer'>
                <h1>Powered By </h1>&nbsp;&nbsp;
                <img src="/images/aqua_ads_logo.jpg" alt="Logo" className='h-10 w-36'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer