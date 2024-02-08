import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between">
            <div className="flex-shrink-0">
              <Link to='/' href="/" className="text-white font-bold text-lg">Logo</Link>
            </div>
            <div className="hidden md:block">
              <NavLink to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Inicio</NavLink>
              <NavLink to="/Cliver" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Cliver</NavLink>
              <NavLink to="/Isaac" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Isaac</NavLink>
              <NavLink to="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Undefied</NavLink>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
