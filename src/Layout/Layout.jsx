import React from 'react';
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';


function Layout() {
    return (
        <>
            <div className='bg-base-100'>
                <div className=' mx-auto  text-cyan-950'>
                    <Navbar></Navbar>
                    <div className='md:container mx-auto'>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default Layout;