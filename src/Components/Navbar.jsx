import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Provider/AuthProvider'
import ActiveLink from './ActiveLink/ActiveLink';

function Navbar() {
  const { user,logOut } = useContext(AuthContext);
  //console.log('current user', user);

  const handleSignOut=()=>{
    logOut()
    .then()
    .catch(error=>{
      //console.log(error);
    })
  }
  return (
    <div className='flex justify-between items-center bg-cyan-900 text-white py-5 px-5'>
      <div className='flex gap-2 items-center'>
        <img src="toylogo.png" className=' w-14 rounded-full' />
        <h1 className='text-xl font-bold'>ToyRifleWorld</h1>
      </div>
      <div className='flex gap-5'>
        <ActiveLink to='/'>Home</ActiveLink>
        <ActiveLink to='/alltoys'>All Toys</ActiveLink>
        {
          user&& <ActiveLink to='/mytoys'>My Toys</ActiveLink>
        }
        {
          user&&<ActiveLink to='/addatoy'>Add a Toy</ActiveLink>
        }
        <ActiveLink to='/blogs'>Blogs</ActiveLink>
      </div>
      <div className='flex'>
        {
          user && <img src={user.photoURL} className=' me-2 rounded-full' style={{ width: "46px",height:"46px" }} title={user.displayName} />
        }
        {
          user ?
            <button onClick={handleSignOut} className=' font-bold rounded py-2 px-5 bg-white text-cyan-950'>
              <Link to='/login'>Log Out</Link>
            </button> : <button className=' font-bold rounded py-2 px-5 bg-white text-cyan-950'>
              <Link to='/login'>Log In</Link>
            </button>
        }
      </div>
    </div>
  )
}

export default Navbar