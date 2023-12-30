import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

        <nav className="bg-gray-800">
        <div className="container mx-auto p-2 text-center">
            <Link to="/">
            <h2 className="text-white text-2xl font-bold">CRUD MERN</h2>
            </Link>
        </div>
        </nav>
            
    </div>
  )
}
