import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usetitle from '../Hooks/useTitle';

function AllToys() {
  const [allToys, setAllToys] = useState([]);
  usetitle('All Toys')

  useEffect(() => {
    fetch('https://toy-marketplace-server-aniqa4.vercel.app/alltoys')
      .then(res => res.json())
      .then(data => {
        setAllToys(data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const toy = form.search.value;

    fetch('https://toy-marketplace-server-aniqa4.vercel.app/searchedToys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ toy }),
    })
      .then(res => res.json())
      .then(data => {
        setAllToys(data);
      })
      .catch(error => {
        console.error('Error searching toys:', error);
      });
  };

  if (!allToys) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold my-20 text-center bg-gray-100 py-5">TOYS ADDED BY ALL USERS</h1>

      <div className="text-center mb-10">
        <form onSubmit={handleSearch}>
          <input type="search" name="search" placeholder="Search Toy" className="border border-cyan-950 py-2 px-5" />
          <input type="submit" value="Search" className="bg-cyan-950 text-white border border-cyan-950 py-2 px-5" />
        </form>
      </div>

      <table className="w-11/12 text-center mb-20">
        <thead>
          <tr className="border-b">
            <th>No.</th>
            <th>Picture</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {allToys.map((toy, index) => (
            <tr key={toy._id} className="border-b">
              <td>{index + 1}</td>
              <td className="flex justify-center"><img src={toy.picture} className="rounded w-36" alt="Toy" /></td>
              <td>{toy.seller}</td>
              <td>{toy.name}</td>
              <td>{toy.subcategory}</td>
              <td>{toy.rating}</td>
              <td>
                <Link to={`/toy/${toy._id}`}>
                  <button className="underline">View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllToys;
