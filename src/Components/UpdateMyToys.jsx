import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

function UpdateMyToys() {
    const toy = useLoaderData();
    console.log(toy);


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
        const updateInfo = { price, availableQuantity, description }
        console.log(updateInfo);

        fetch(`https://toy-marketplace-server-aniqa4.vercel.app/myToys/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged==true) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy has been updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

            
    }
    return (
        <div className='my-20'>
            <h1 className=' text-2xl font-semibold text-center mb-10 bg-gray-100 py-5'>UPDATE YOUR PREVIOUS TOYS</h1>
            <form onSubmit={handleUpdate} className='grid grid-cols-1 w-8/12 mx-auto' >
                <div className='grid'>
                    <label>Price </label>
                    <input type="text" name='price' defaultValue={toy.price} className="input rounded border-cyan-950" />
                </div>
                <div className='grid'>
                    <label> Available Quantity </label>
                    <input type="number" name='quantity' defaultValue={toy.availableQuantity} className="input rounded border-cyan-950" />
                </div>
                <div className='grid'>
                    <label>Description </label>
                    <input type="text" name='description' defaultValue={toy.description} className="input rounded border-cyan-950" />
                </div>
                <input type="submit" value="Submit" className='text-white bg-cyan-900 rounded py-2 mt-5' />
            </form>
        </div>
    )
}

export default UpdateMyToys;