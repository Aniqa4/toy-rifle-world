import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Provider/AuthProvider'
import { GoogleAuthProvider } from 'firebase/auth';

function Login() {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState('');
  const provider= new GoogleAuthProvider;

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      })
  }

  const handleGoogleSignIn=()=>{
    googleSignIn(provider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      })
  }


  return (
    <div className='mx-auto md:w-5/12 m-20 p-20 border rounded shadow-inner'>
      <form onSubmit={handleLogin} className='grid grid-cols-1 gap-5'>
        <div className='grid'>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder='Enter your Email address' className='border rounded border-cyan-950 p-2' />
        </div>
        <div className='grid'>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" placeholder='Enter your Password' className='border rounded border-cyan-950 p-2' />
        </div>
        <input type="submit" value="Log In" className='border rounded bg-cyan-900 text-white p-2' />
      </form>
      <div className=' text-center mt-5 font-semibold border border-cyan-950 p-2 rounded'>
        <button onClick={handleGoogleSignIn}>Log In with Google</button>
      </div>
      <h1 className=' text-center mt-5'>Don't have an account?<Link to='/register' className='link'>Register</Link></h1>
      <p className=' text-center text-red-900 pt-2'>{error}</p>
    </div>
  )
}

export default Login;