import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext, auth } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import usetitle from '../Hooks/useTitle';

function Register() {
  const { signUp } = useContext(AuthContext);
  const [error,setError]=useState('');

  usetitle('Register')

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    //console.log(email, password,name, photoUrl);

    signUp(email, password)
      .then(result => {
          const loggedUser=result.user;
          //console.log(loggedUser);
          updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
          })
      })
      .catch(error=>{
        //console.log(error);
        setError(error.message)
      })

  }
  return (
    <div className='mx-auto md:w-5/12 m-20 p-20 border rounded shadow-inner'>
      <form onSubmit={handleSignIn} className='grid grid-cols-1 gap-5'>
        <div className='grid'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder='Enter your Name' className='border rounded border-cyan-950 p-2' />
        </div>
        <div className='grid'>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder='Enter your Email address' className='border rounded border-cyan-950 p-2' />
        </div>
        <div className='grid'>
          <label htmlFor="email">Password:</label>
          <input type="password" name="password" placeholder='Enter your Password' className='border rounded border-cyan-950 p-2' />
        </div>
        <div className='grid'>
          <label htmlFor="photoURL">Photo URL:</label>
          <input type="text" name="photo" placeholder='Enter photo URL' className='border rounded border-cyan-950 p-2' />
        </div>
        <input type="submit" value="Register" className='border rounded bg-cyan-900 text-white p-2' />
      </form>
      <h1 className='text-center mt-5'>Already have an account?<Link to='/login' className='link'>Log In</Link></h1>
      <p className=' text-center text-red-900 pt-2'>{error}</p>
    </div>
  )
}

export default Register;