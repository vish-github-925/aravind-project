import React from 'react'
import NavItem from './NavItem'
import MobileNavItem from "./MobileNavItem"
import { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
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
    <header className='sticky right-0 top-0'>
        {/* For larger screens */}
        <nav className='hidden md:px-80 md:flex h-[10vh] w-full items-center justify-between text-teal-600 bg-white'>
            <NavItem name="Home" linkLocation={""} />
            <NavItem name="About" linkLocation={"about"} />
            <NavItem name="Logo" linkLocation={""} />
            <NavItem name="Inspiration" linkLocation={"inspiration"} />
            <NavItem name="Contact Us" linkLocation={"contact"} />
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