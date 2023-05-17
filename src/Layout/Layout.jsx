import React from 'react';
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';


function Layout() {
    return (
        <>
            <div className='bg-base-100'>
                <div className='container mx-auto  text-cyan-950'>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default Layout;