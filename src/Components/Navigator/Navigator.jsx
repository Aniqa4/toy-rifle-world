import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

function Navigator({children}) {
    const {loading}=useContext(AuthContext)
    const {user}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
      return <div>Loading</div>
    }


    if(user){
        return children
    }
  return <Navigate state={{from:location}} to="/login" replace></Navigate>
}

export default Navigator;