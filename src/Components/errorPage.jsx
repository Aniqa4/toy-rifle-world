import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className=' grid justify-center my-20'>
            <div>
                <img src="404.gif" className='rounded c' />
            </div>
            <Link t0="/" className='underline text-center'> Back to Home page</Link>
        </div>
    )
}

export default ErrorPage;