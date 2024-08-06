import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-10 border-1 border-black-500 rounded-lg bg-white flex items-center justify-center font-bold shadow-md ">
            <p className="blue-gradient_text">BB</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}><p>About</p></NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}><p>Projects</p></NavLink>
              <p>About</p>
        </nav>
    </header>
  )
}

export default Navbar