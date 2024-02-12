import React from 'react'
import { Link } from 'react-router-dom'

function NavItem({name, linkLocation}) {
  return (
    <div className='h-full hover:cursor-pointer py-3 px-8 hover:bg-teal-700 hover:rounded-2xl'>
        <Link to={`/${linkLocation}`} className='text-lg tracking-wider h-full w-full hover:text-white font-semibold transition-all ease-linear delay-75'>{name}</Link>

    </div>
  )
}

export default NavItem