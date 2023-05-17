import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/alltoys'>All Toys</Link>
        <Link to='/mytoys'>My Toys</Link>
        <Link to='/addatoy'>Add a Toy</Link>
        <Link to='/blogs'>Blogs</Link>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar