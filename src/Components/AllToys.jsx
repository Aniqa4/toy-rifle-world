import React, { useEffect, useState } from 'react'

function AllToys() {

  const [allToys, setAllToys] = useState([])

  useEffect(() => {
    fetch('https://toy-marketplace-server-aniqa4.vercel.app/alltoys')
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
      })
  }, [])

  //console.log(allToys);
  return (
    <div>
      <h1 className=' text-2xl font-semibold my-5'>Toys added by all users</h1>
      <table className='w-11/12 text-center mb-20'>
        <thead>
          <tr className=' border-b'>
            <th>No.</th>
            <th>Picture</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            allToys.map((toy, index) =>
              <tr key={toy._id} className='border-b'>
                <td>{index + 1}</td>
                <td><img src={toy.picture} className=' ms-24 rounded w-36 ' /></td>
                <td>{toy.seller}</td>
                <td>{toy.name}</td>
                <td>{toy.subcategory}</td>
                <td>{toy.rating}</td>
                <td><button>View Details</button></td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllToys