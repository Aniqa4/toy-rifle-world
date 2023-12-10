import React from 'react'

function BestSellerToys() {
    return (
        <div className='my-10 mx-5'>
            <h1 className=' text-center text-3xl mb-5 font-semibold uppercase'>Best Seller Toys</h1>
            <div className='md:grid grid-cols-3 gap-10 rounded'>
                <div className='bg-gray-100 p-10 text-center'>
                    <img src="m416.jpg" className='w-11/12'/>
                    <h1 className=' font-semibold pt-5'>M416 Toy Assault Rifle</h1>
                </div>
                <div className='bg-gray-100 p-10 text-center'>
                    <img src="ak.jpg" />
                    <h1 className=' font-semibold pt-5'>AKM Toy Assault Rifle</h1>
                </div>
                <div className='bg-gray-100 p-10 text-center'>
                    <img src="dp28.jpeg" />
                    <h1 className=' font-semibold pt-5'>DP-28 Toy Light Machine Gun</h1>
                </div>
            </div>
        </div>
    )
}

export default BestSellerToys