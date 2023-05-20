import React, { useContext } from 'react'
import { AuthContext } from './Provider/AuthProvider';

function AddAToy() {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleAddToys = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const price = form.x.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;
    console.log(name, picture, price, quantity, rating, description);
  }
  return (
    <div className='my-20'>
      <h1 className=' text-2xl font-semibold text-center mb-10 bg-gray-100 py-5'>Add A Toy to The Collection</h1>
      <form onSubmit={handleAddToys} className='grid gap-10 w-8/12 mx-auto'>
        <div className='grid grid-cols-2 gap-5'>

          <div className='grid'>
            <label>Toy Name</label>
            <input type="text" name='name' placeholder='Toy Name' className="input rounded border-cyan-950" />
          </div>

          <div className='grid'>
            <label>Toy Photo</label>
            <input type="url" name='picture' placeholder='Photo URL' className="input rounded border-cyan-950" />
          </div>

          <div className='grid'>
            <label>Seller Name</label>
            <input type="text" name='sellerName' placeholder='Seller Name' defaultValue={user.displayName} disabled className="input rounded border-cyan-950" />
          </div>

          <div className='grid'>
            <label>Seller Email</label>
            <input type="email" name='sellerEmail' defaultValue={user.email} placeholder='Seller Email' disabled className="input rounded border-cyan-950" />
          </div>

          <div className='grid'>
            <label>Sub-Category</label>
            <input type="text" name='subcategory' placeholder='Assault Rifle / Sniper Rifle / Submachine Gun' className="input rounded border-cyan-950" />
          </div>

          <div className='grid'>
            <label>Price</label>
            <input type="text" name='price' placeholder='$Price' className="input rounded border-cyan-950" />
          </div>

          <div className='grid'>
            <label>Quantity</label>
            <input type="number" name='quantity' placeholder='Quantity' className="input rounded border-cyan-950" />
          </div>

          <div className='grid'>
            <label>Rating</label>
            <input type="text" name='rating' placeholder='Rating/5' className="input rounded border-cyan-950" />
          </div>

          <div className='grid'>
            <label>Description</label>
            <input type="text" name='description' placeholder='Description' className="input rounded border-cyan-950" />
          </div>
        </div>
        <input type="submit" value="Submit" className='text-white bg-cyan-900 rounded py-2' />
      </form>
    </div>
  )
}

export default AddAToy