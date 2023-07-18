import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='bg-red-700 h-24 flex items-center justify-around'>
      <NavLink to='/' className='bg-white border rounded-2xl p-2'>Technique list</NavLink>
      <h1>Kenpo Karate Technique Trainer</h1>
      <NavLink to='/trainer' className='bg-white border rounded-2xl p-2'>Technique trainer</NavLink>
    </nav>
  )
}

export default Header