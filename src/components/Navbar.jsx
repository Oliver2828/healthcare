import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">HealthMarket</Link>
      <div className="hidden md:flex space-x-6">
        <Link to="/doctors" className="hover:text-gray-200">Doctors</Link>
        <Link to="/pharmacies" className="hover:text-gray-200">Pharmacies</Link>
        <Link to="/products" className="hover:text-gray-200">Medicines</Link>
        <Link to="/cart" className="hover:text-gray-200">Cart</Link>
        {/* <Link to="/profile" className="hover:text-gray-200">Profile</Link> */}
      </div>
      <div className="space-x-4">
        <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-lg">Login</Link>
        <Link to="/register" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg">Register</Link>
      </div>
    </nav>
  )
}
