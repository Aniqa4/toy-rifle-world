import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function MyToys() {
  const [allToys, setAllToys] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    fetch('https://toy-marketplace-server-aniqa4.vercel.app/allToys')
      .then(res => res.json())
      .then(data => {
        setAllToys(data)
      })
  }, [])

  const handleDelete=(id)=>{
    const confirmed = window.confirm('Are you sure you want to delete this toy?');
    if (confirmed) {
      console.log('id', id);
      fetch(`http://localhost:5000/myToys/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Toy has been deleted',
              showConfirmButton: false,
              timer: 1500
            })
            const remainingToys = allToys.filter(x => x._id !== id);
            setAllToys(remainingToys);
          }
        });
    }
  }
  

  if (loading) {
    return <div>Loading....</div>
  }


  const email = user ? user.email : '';
  const myToys = allToys.filter(x => x.sellerEmail === email)


  return (
    <div>
      <h1 className=' text-center text-2xl font-semibold my-20 py-5 bg-gray-100'>MY TOYS</h1>
      <table className='w-11/12 text-center mb-20'>
        <thead>
          <tr className=' border-b'>
            <th>No.</th>
            <th>Picture</th>
            <th>Toy Name</th>
            <th>Seller</th>
            <th>Seller Email</th>
            <th>Sub-Category</th>
            <th>price</th>
            <th>Available Quantity</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {
            myToys.map((toy, index) =>
              <tr key={toy._id} className='border-b'>
                <td>{index + 1}</td>
                <td className=' flex justify-center'><img src={toy.picture} className=' rounded w-20   ' /></td>
                <td>{toy.name}</td>
                <td>{toy.seller}</td>
                <td className=' text-sm'>{toy.sellerEmail}</td>
                <td>{toy.subcategory}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>{toy.rating}</td>
                <td><label htmlFor="my-modal-3" className="underline text-sm">click here to read</label></td>
                <td>
                  <Link to={`/myToys/${toy._id}`}><button className='border border-cyan-950 rounded-full px-1'>update</button> </Link>
                  /<button onClick={()=>{handleDelete(toy._id)}} className='text-red-800 border border-red-950 rounded-full px-1'>delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      {
        myToys.map(toy =>
          <div key={toy._id}>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Description</h3>
                <p className="py-4">{toy.description}</p>
              </div>
            </div>
          </div>)
      }
    </div>
  )
}

export default MyToys;