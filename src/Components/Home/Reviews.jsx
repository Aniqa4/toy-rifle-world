import React from 'react';
import { AiFillStar } from 'react-icons/ai';


function Reviews() {
  return (
    <div className=' md:ps-10 pb-10 pt-5 '>
        <h1 className=' text-3xl mb-5 font-semibold text-center'>Recommendations    </h1>
        <div className=' border grid grid-cols-1 shadow p-5 gap-5'>
            <div className='p-2 md:p-5 border'>
                <h1 className=' font-semibold'>Name: Customer 1</h1>
                <p className=' flex items-center'> Ratings:  
                <span className=' text-yellow-500 flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                </p>
                <p className=' text-gray-500 text-sm'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure corporis debitis nulla iste in sed reprehenderit possimus veniam? Praesentium vitae aperiam et quod, itaque sint perspiciatis dolorem hic cumque.</p>
            </div>
            <div className='p-2 md:p-5 border'>
                <h1 className=' font-semibold'>Name: Customer 2</h1>
                <p className=' flex items-center'> Ratings:  
                <span className=' text-yellow-500 flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                </p>
                <p className=' text-gray-500 text-sm'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure corporis debitis nulla iste in sed reprehenderit possimus veniam? Praesentium vitae aperiam et quod, itaque sint perspiciatis dolorem hic cumque.</p>
            </div>
            <div className='p-2 md:p-5 border'>
                <h1 className=' font-semibold'>Name: Customer 3</h1>
                <p className=' flex items-center'> Ratings:  
                <span className=' text-yellow-500 flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                </p>
                <p className=' text-gray-500 text-sm'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure corporis debitis nulla iste in sed reprehenderit possimus veniam? Praesentium vitae aperiam et quod, itaque sint perspiciatis dolorem hic cumque.</p>
            </div>
            <div className='p-2 md:p-5 border'>
                <h1 className=' font-semibold'>Name: Customer 4</h1>
                <p className=' flex items-center'> Ratings:  
                <span className=' text-yellow-500 flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                </p>
                <p className=' text-gray-500 text-sm'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure corporis debitis nulla iste in sed reprehenderit possimus veniam? Praesentium vitae aperiam et quod, itaque sint perspiciatis dolorem hic cumque.</p>
            </div>
            <div className='p-2 md:p-5 border'>
                <h1 className=' font-semibold'>Name: Customer 5</h1>
                <p className=' flex items-center'> Ratings:  
                <span className=' text-yellow-500 flex'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                </p>
                <p className=' text-gray-500 text-sm'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure corporis debitis nulla iste in sed reprehenderit possimus veniam? Praesentium vitae aperiam et quod, itaque sint perspiciatis dolorem hic cumque.</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews