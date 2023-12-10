import React from 'react'

function Banner() {
    return (
        <div className='md:flex grid grid-cols-1 md:justify-center gap-10 md:my-20 my-5 mx-5'>
            <img src="banner.jpg" className=' shadow-xl' />
            <div className='flex items-center'>
                <div className='grid grid-cols-1 gap-10'>
                    <h1 className='text-5xl font-semibold uppercase'>Welcome to The Toy Rifle World.</h1>
                    <p className=' text-gray-500'>Where imagination meets excitement!
                        Discover a wide range of high-quality toy rifles that bring thrilling adventures to life. From classic designs to modern styles,
                        our collection offers something for every aspiring hero. Safety is paramount,
                        so rest assured that our toy rifles are crafted with child-friendly materials.
                        Get ready for action-packed fun and let your imagination soar with our incredible toy rifles!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner;