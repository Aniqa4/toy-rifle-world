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
    const seller=form.seller.value;
    const sellerEmail=form.sellerEmail.value;
    const subcategory=form.subcategory.value;
    const price = form.price.value;
    const availableQuantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const toyInfo={name,picture,price,rating, seller,sellerEmail, subcategory,availableQuantity,description}
    console.log(toyInfo);

    fetch('http://localhost:5000/addToys',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(toyInfo)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
    form.reset();
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
            <input type="text" name='seller' placeholder='Seller Name' defaultValue={user.displayName} disabled className="input rounded border-cyan-950" />
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