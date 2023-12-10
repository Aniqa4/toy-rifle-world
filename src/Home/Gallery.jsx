import React from 'react'

function Gallery() {
  return (
    <div className=' ps-10 pb-10 pt-5 text-center' >
        <h1 className=' text-5xl mb-5 font-semibold'>Photo Gallery</h1>
        <div className='grid md:grid-cols-3 gap-5'>
            <img src="g-1.jpg" className='w-full h-80' />
            <img src="g-2.jpg" className='w-full h-80'/>
            <img src="g-3.jpg" className='w-full h-80'/>
            <img src="g-4.jpg" className='w-full h-80'/>
            <img src="g-5.jpg" className='w-full h-80'/>
            <img src="g-6.jpg" className='w-full h-80'/>
        </div>
    </div>
  )
}

export default Gallery;