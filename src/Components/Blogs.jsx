import React from 'react'
import usetitle from '../Hooks/useTitle'

function Blogs() {
  usetitle('Blog')
  return (
    <div>
      <h1 className="text-2xl font-semibold my-20 text-center bg-gray-100 py-5">BLOG</h1>
      <div>
        <div>
          <h1 className=' font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
          <p>Access tokens are credentials used for authentication and authorization to access protected resources.
            Refresh tokens are credentials used to obtain new access tokens after they expire.
            Access tokens are short-lived and provide temporary access, while refresh tokens have longer expiration times and can be used to request new access tokens without reauthentication.
            Access and refresh tokens should be stored securely on the client-side,
            following best practices such as using secure cookies or secure storage mechanisms provided by the platform.</p>
        </div>
        <div className=' my-10'>
          <h1 className=' font-semibold'>Compare SQL and NoSQL databases?</h1>
          <p>SQL databases are structured and follow a relational model, while NoSQL databases are flexible and offer different data models for scalability and handling unstructured data.</p>
        </div>
        <div>
          <h1 className=' font-semibold'>What is express js? What is Nest JS?</h1>
          <p> Express.js is a lightweight and flexible web application framework for Node.js,
            while NestJS is a feature-rich and opinionated framework that follows a modular and structured approach inspired by Angular.
            Both frameworks have their own strengths and are suitable for different types of projects and development preferences.
          </p>
        </div>
        <div className='my-10'>
          <h1 className=' font-semibold'>What is MongoDB aggregate and how does it work?</h1>
          <p>MongoDB's Aggregation Framework is a powerful feature that allows you to process and transform data within the database.
            It provides a flexible and efficient way to perform complex operations on collections of documents.</p>
        </div>
      </div>
    </div>
  )
}

export default Blogs