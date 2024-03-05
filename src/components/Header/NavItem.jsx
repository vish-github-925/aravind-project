import React from 'react'
import { Link } from 'react-router-dom'

function NavItem({name, linkLocation, t}) {
  return (
    <div className='h-full hover:cursor-pointer py-3 px-8 hover:rounded-2xl hover:text-black'>
      
        <Link to={`/${linkLocation}`} className={`text-lg tracking-wider after:content-[''] relative after:-bottom-1 after:left-0 after:absolute after:h-[2px] after:scale-0 hover:after:scale-100 after:transition-all after:ease-linear after:duration-150 after:mt-1 after:w-full after:bg-teal-500  h-full w-full font-medium transition-all ease-linear delay-7 ${t}`}>{name}</Link>

    </div>
  )
}

export default NavItem