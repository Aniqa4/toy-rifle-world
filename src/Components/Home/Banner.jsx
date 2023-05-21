import React from 'react'

function Banner() {
    return (
        <div className='flex justify-center gap-5 my-20'>
            <img src="banner.jpg" className=' rounded' />
            <div >
                <h1 className='text-5xl font-semibold'>Welcome to The Toy Rifle World.</h1>
                <p className=' text-gray-500'>where imagination meets excitement!
                    Discover a wide range of high-quality toy rifles that bring thrilling adventures to life. From classic designs to modern styles,
                    our collection offers something for every aspiring hero. Safety is paramount,
                    so rest assured that our toy rifles are crafted with child-friendly materials.
                    Get ready for action-packed fun and let your imagination soar with our incredible toy rifles!
                </p>
            </div>
        </div>
    )
}

export default Banner;