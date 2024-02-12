import React from 'react'
import NavItem from './NavItem'
import MobileNavItem from "./MobileNavItem"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../Banner/Banner'


function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenu = (e) => {
    setMenuOpen(prev => !prev)
  }
  const handleMobileNavClick = (e) => {
    setMenuOpen(false)
    let loc = ""
    if(e.target.innerText === "Home" || e.target.innerText === "Logo"){
      loc = ""
    }
    else{
      loc = e.target.innerText.split(" ")[0].toLowerCase()
    }
    
    navigate(`/${loc}`)
  }
  return (
    <header className='sticky right-0 top-0 min-h-[15vh] md:flex items-center justify-normal z-10 bg-white'>
        {/* For larger screens */}
        <Banner />
        <nav className='hidden py-6 md:px-32 md:flex  h-full w-full items-center justify-between text-teal-600'>
            <div>
            <NavItem name="Logo" linkLocation={""} />
            </div>
            <div className='md:flex items-center justify-normal space-x-10'>
            <NavItem name="Home" linkLocation={""} />
            <NavItem name="About" linkLocation={"about"} />
            <NavItem name="Inspiration" linkLocation={"inspiration"} />
            <NavItem name="Contact Us" linkLocation={"contact"} />
            </div>
        </nav>
        {/* For mobile screen */}
        
       
        {menuOpen ? ( <div className='md:hidden overflow-hidden flex h-[10vh] items-center bg-white  px-5 justify-end sticky z-10 cursor-pointer ease-linear'>
        <span className="material-symbols-outlined text-3xl text-slate-600" onClick={handleMenu}>close</span>
        </div>) : (
            <div className='md:hidden flex h-[10vh] items-center  px-5 justify-end sticky z-10 cursor-pointer ease-linear'>
        <span className="material-symbols-outlined text-3xl text-slate-600" onClick={handleMenu}>menu</span>
        </div>
)}
{menuOpen && ( <nav className='md:hidden h-max flex flex-col items-center space-y-5  py-5 outline-none border-b-2 border-b-slate-500 bg-white shadow-lg w-full z-10  ease-linear delay-75'>
            <MobileNavItem name="Home"  onClick={handleMobileNavClick}/>
            <MobileNavItem name="About" onClick={handleMobileNavClick}/>
            <MobileNavItem name="Logo"  onClick={handleMobileNavClick}/>
            <MobileNavItem name="Inspiration" onClick={handleMobileNavClick}/>
            <MobileNavItem name="Contact Us" onClick={handleMobileNavClick}/>
        </nav>)}
        
    </header>
  )
}

export default Header