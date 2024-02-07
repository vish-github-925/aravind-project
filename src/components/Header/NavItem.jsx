import React from 'react'
import { Link } from 'react-router-dom'

function NavItem({name, linkLocation}) {
  return (
    <div className='hover:text-blue-400'>
        <Link to={`/${linkLocation}`}>{name}</Link>
    </div>
  )
}

export default NavItem