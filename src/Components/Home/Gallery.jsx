import React from 'react'

function Gallery() {
  return (
    <div className=' bg-purple-100 ps-10 pb-10 pt-5 text-center'>
        <h1 className=' text-2xl mb-5 font-semibold'>Photo Gallery</h1>
        <div className='grid grid-cols-3 gap-5'>
            <img src="g-1.jpg" className='w-11/12 h-80 rounded border' />
            <img src="g-2.jpg" className='w-11/12 h-80 rounded border'/>
            <img src="g-3.jpg" className='w-11/12 h-80 rounded border'/>
            <img src="g-4.jpg" className='w-11/12 h-80 rounded border'/>
            <img src="g-5.jpg" className='w-11/12 h-80 rounded border'/>
            <img src="g-6.jpg" className='w-11/12 h-80 rounded border'/>
        </div>
    </div>
  )
}

export default Gallery