import React, { useEffect } from 'react'
import NavItem from './NavItem'
import MobileNavItem from "./MobileNavItem"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'

function Header({t}) {
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
    <header className={`transition-all duration-300 sticky right-0 top-0 md:flex items-center justify-normal z-10   w-full h-[100px] bg-white`}>
        {/* For larger screens */}
        <Banner />
        <nav className='hidden py-6 md:px-32 md:flex  h-full w-full items-center justify-between text-slate-500'>
           
            <div className='h-full hover:cursor-pointer px-8 hover:rounded-2xl w-[500px] '>
              <Link to={`/`} className={`text-lg tracking-wider h-full w-full font-medium transition-all ease-linear delay-7 flex items-center justify-start -space-x-5`}>
          <img src="/images/aqua_wave.png" alt="Aqua Ads Logo" className='rounded-lg  h-[50px] w-[50px]'/><span style={{fontFamily: "Conquera Medium"}} className='text-[10px] mb-2'>AQUA ADS</span>

              </Link>
</div> 
            
            <div className='md:flex items-center justify-normal space-x-10'>
            <NavItem name="Home" linkLocation={""} t={t}/>
            <NavItem name="About" linkLocation={"about"} t={t}/>
            <button onClick={() => navigate("/contact")} className='text-white text-lg tracking-wider h-full w-full  hover:-translate-y-[2px] font-semibold transition-all ease-linear delay-75 hover:bg-green-400  bg-green-500 py-2 rounded'>Contact Us</button>
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