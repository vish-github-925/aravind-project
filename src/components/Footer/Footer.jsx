import React from 'react'
import { useNavigate } from 'react-router-dom'
function Footer() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/contact")
    }
  return (
    <footer className='flex flex-col bg-black text-white h-[60vh] md:px-40 md:pt-20 md:pb-5 px-10 pt-10'>
        <div className='flex flex-col w-full  md:flex-row  justify-between items-center  h-[50vh] '>
            <div className='h-2/3 md:h-full  w-full md:w-1/2 flex flex-col space-y-8 md:justify-normal md:space-y-3 items-start '>
                <span className=' font-medium text-2xl'>Because water should be free</span>
                <span className='text-md'>Help us spread the word and share our movement with your friends and family</span>
                <button onClick={handleClick} className='px-2 py-1 active:scale-95 ease-linear rounded text-white bg-blue-400 cursor-pointer hover:bg-blue-600'>Contact Us</button>
            </div>
            <div className='h-1/3 md:h-full flex flex-col md:space-y-5 space-y-1 md:items-start md:pl-40 md:justify-start w-full md:w-1/2'>
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
        <div className='h-[10vh] flex items-center justify-center'>
            <span className='text-sm md:text-lg'>© 2023  Copyright 'WaterProject' All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer