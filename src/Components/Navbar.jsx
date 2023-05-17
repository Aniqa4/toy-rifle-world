import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-purple-100 py-5 px-5 text-cyan-950'>
      <div className='flex gap-2 items-center'>
        <img src="toylogo.png" className=' w-14 rounded-full' />
        <h1 className='text-xl font-bold'>ToyRifleWorld</h1>
      </div>
      <div className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/alltoys'>All Toys</Link>
        <Link to='/mytoys'>My Toys</Link>
        <Link to='/addatoy'>Add a Toy</Link>
        <Link to='/blogs'>Blogs</Link>
      </div>
      <button className='border-2 border-cyan-950 rounded py-2 px-5 bg-white'>
        <Link to='/login'>Login</Link>
      </button>
    </div>
  )
}

export default Navbar