import React from 'react'

function AddAToy() {
  return (
    <div className='my-20'>
      <h1 className=' text-2xl font-semibold text-center mb-10 bg-gray-100 py-5'>Add A Toy to The Collection</h1>
      <form className='grid gap-10 w-8/12 mx-auto'>
        <div className='grid grid-cols-2 gap-5'>
          <input type="text" name='toyName' placeholder='Toy Name' className="input rounded border-cyan-950" />
          <input type="url" name='photo' placeholder='Photo URL' className="input rounded border-cyan-950" />
          <input type="text" name='sellerName' placeholder='Seller Name' className="input rounded border-cyan-950" />
          <input type="email" name='sellerEmail' placeholder='Seller Email' className="input rounded border-cyan-950" />
          <input type="text" name='price' placeholder='Price' className="input rounded border-cyan-950" />
          <input type="number" name='quantity' placeholder='Quantity' className="input rounded border-cyan-950" />
          <input type="text" name='rating' placeholder='Rating' className="input rounded border-cyan-950" />
          <input type="text" name='description' placeholder='Description' className="input rounded border-cyan-950" />
        </div>
        <input type="submit" value="Submit" className='text-white bg-cyan-900 rounded py-2' />
      </form>
    </div>
  )
}

export default AddAToy