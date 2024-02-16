import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactUs() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/contact")
    }
  return (
    <button className='hidden md:block fixed bottom-10 left-10 px-3 py-2 active:scale-95 ease-linear rounded text-white bg-blue-600 cursor-pointer hover:bg-blue-500' onClick={handleClick}>Contact Us</button>
  )
}

export default ContactUs