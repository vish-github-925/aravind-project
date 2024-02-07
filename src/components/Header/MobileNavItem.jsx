import React from 'react'
import { Link } from 'react-router-dom'

function NavItem({name, onClick}) {
  return (
    <div className='hover:text-blue-400'>
        <button onClick={onClick}>{name}</button>
    </div>
  )
}

export default NavItem