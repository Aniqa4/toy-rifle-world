import React from 'react'

function NewArivals() {
    return (
        <div className='mx-5'>
            <h1 className=' text-center text-3xl mb-5 font-semibold uppercase'>New Arrivals</h1>
            <div className='md:grid grid-cols-3 gap-10 rounded'>
                <div className='bg-gray-100 p-10'>
                    <img src="famas.jpeg" />
                    <h1 className=' font-semibold pt-5 text-center'>FAMAS Toy Assault Rifle</h1>
                </div>
                <div className='bg-gray-100 p-10'>
                    <img src="mini14.jpg" />
                    <h1 className=' font-semibold pt-5 text-center'>Mini14 Toy Semi-Assault Rifle</h1>
                </div>
                <div className='bg-gray-100 p-10'>
                    <img src="m24.jpg" />
                    <h1 className=' font-semibold pt-5 text-center'>M24 Toy Sniper Rifle</h1>
                </div>
            </div>
        </div>
    )
}

export default NewArivals;