import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from './Provider/AuthProvider';

function ToyDetails() {
    const {user}=useContext(AuthContext);
    
    const [toyDetails, setToyDetails] = useState([]);
    const parameter = useParams();
    const id = parameter.id;


    useEffect(() => {
        fetch(`https://toy-marketplace-server-aniqa4.vercel.app/alltoys`)
            .then(res => res.json())
            .then(data => {
                setToyDetails(data)
            })
    }, [])

    const singleToyInfo = toyDetails.find(x => x._id === id)
    if (!singleToyInfo) {
        return <div className="radial-progress" style={{"--value":100}}>100%</div>
    }
    //console.log('toy',toyDetails);
    return (
        <div>
            <h1 className='my-10 py-5 text-center text-2xl font-semibold bg-gray-100'>TOY INFORMATIONS</h1>
            <h1 className=' text-center text-4xl font-semibold'>{singleToyInfo.name}</h1>
            <div className='w-4/12 grid mx-auto py-5'><img src={singleToyInfo.picture} className='rounded' /></div>
            <div className='w-10/12 mx-auto my-20'>
                <p><span className=' font-bold'>Seller : </span>{singleToyInfo.seller}</p>
                <p><span className=' font-bold'>Seller Email : </span>{singleToyInfo.sellerEmail}</p>
                <p><span className=' font-bold'>Sub-category : </span>{singleToyInfo.subcategory}</p>
                <p><span className=' font-bold'>Price : </span>{singleToyInfo.price}</p>
                <p><span className=' font-bold'>Available Quantity : </span>{singleToyInfo.availableQuantity}</p>
                <p><span className=' font-bold'>Rating : </span>{singleToyInfo.rating}</p>
                <p><span className=' font-bold'>Description :</span>{singleToyInfo.description}</p>
            </div>
        </div>
    )
}

export default ToyDetails