import React, { useEffect } from 'react'
import NavItem from './NavItem'
import MobileNavItem from "./MobileNavItem"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'
import { Button } from "@material-tailwind/react";

function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  
  const handleMenu = (e) => {
    setMenuOpen(prev => !prev)
  }
  const handleMobileNavClick = (e) => {
    setMenuOpen(false)
    let loc = ""
    if(e.target.innerText === "Home"){
      loc = ""
    }
    else{
      loc = e.target.innerText.split(" ")[0].toLowerCase()
    }
    
    navigate(`/${loc}`)
  }
  return (
    <header className={`transition-all duration-300 sticky right-0 top-0 md:flex items-center justify-normal z-10   w-full md:h-[20vh] bg-white`}>
        {/* For larger screens */}
        <Banner />
        <nav className='hidden md:flex md:px-20  h-full w-full items-center justify-between text-slate-500 '>
        <div className='h-full hover:cursor-pointer w-[300px]'>
              <Link to={`/`} className={`h-full w-full flex items-center justify-start`}>
                  <img src="/images/aqua_ads_logo_white.jpg" alt="Aqua Ads Logo" className='h-2/3 w-full'/>
        
              </Link>
        </div>
            <div className='md:flex items-center justify-normal'>
            <NavItem name="Home" linkLocation={""}/>
            <NavItem name="About" linkLocation={"about"}/>
            <NavItem name="FAQ" linkLocation={"faq"}/>
            <Button onClick={() => navigate("/contact")} className='text-white text-sm tracking-wider w-[200px] h-[50px] font-semibold transition-all ease-linear hover:bg-green-400  bg-green-500 rounded'>Contact Us</Button>
            </div>
        </nav>
        
       
        {/* For mobile screen */}
        {menuOpen ? ( <div className='md:hidden overflow-hidden flex h-[10vh] items-center bg-white px-5 justify-end sticky z-10 cursor-pointer ease-out transition-all delay-75'>
        <span className="material-symbols-outlined text-3xl text-slate-600" onClick={handleMenu}>close</span>
        </div>) : (
            <div className='md:hidden flex h-[10vh] items-center  px-5 justify-end sticky z-10 cursor-pointer ease-linear'>
        <span className="material-symbols-outlined text-3xl text-slate-600" onClick={handleMenu}>menu</span>
        </div>
)}
{menuOpen && ( <nav className='md:hidden h-max flex flex-col items-center space-y-5  py-5   border-b-2 border-b-slate-500 shadow-lg w-full z-10  ease-out delay-300 transition-all'>
         
           <div className='flex items-center duration-300 justify-center hover:cursor-pointer' onClick={handleMobileNavClick} name="Home" >
            <img src="/images/aqua_ads_logo_white.jpg" alt="Logo" className='h-1/2 w-1/2'/>
            </div>
           
            <MobileNavItem name="Home"  onClick={handleMobileNavClick}/>
            <MobileNavItem name="About" onClick={handleMobileNavClick}/>
            <MobileNavItem name="FAQ" onClick={handleMobileNavClick}/>
            <Button onClick={handleMobileNavClick} className='text-white text-sm tracking-wider w-[200px] h-[50px] font-semibold transition-all ease-linear hover:bg-green-400  bg-green-500 rounded'>Contact Us</Button>
        </nav>)}
    </header>
  )
}

export default Header