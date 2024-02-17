import React from 'react'
import { Link } from 'react-router-dom'

function NavItem({name, linkLocation, t}) {
  return (
    <div className='h-full hover:cursor-pointer py-3 px-8 hover:rounded-2xl hover:text-black'>
      
        <Link to={`/${linkLocation}`} className={`text-lg tracking-wider h-full w-full font-medium transition-all ease-linear delay-7 ${t}`}>{name}</Link>

    </div>
  )
}

export default NavItem