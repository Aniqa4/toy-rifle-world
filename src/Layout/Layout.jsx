import React from 'react';
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom';


function Layout() {
    return (
        <>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Layout;