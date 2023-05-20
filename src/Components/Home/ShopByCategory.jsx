import React, { useEffect } from 'react'
import { useState } from 'react'
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'

function ShopByCategory() {
    const [ar, setAr] = useState([]);
    const [sr, setSr] = useState([]);
    const [smg, setSmg] = useState([]);

    //------------data for 2 assault rifles----------------
    useEffect(() => {
        fetch('https://toy-marketplace-server-aniqa4.vercel.app/arCategory')
            .then(res => res.json())
            .then(data => {
                setAr(data);
            })
    }, [])

    //---------------for SR-------------
    useEffect(() => {
        fetch('https://toy-marketplace-server-aniqa4.vercel.app/srCategory')
            .then(res => res.json())
            .then(data => {
                setSr(data);
            })
    }, [])

    //---------------for SMG------------
    useEffect(() => {
        fetch('https://toy-marketplace-server-aniqa4.vercel.app/smgCategory')
            .then(res => res.json())
            .then(data => {
                setSmg(data);
            })
    }, [])

    console.log(ar);
    return (
        <div>
            <h1 className=' text-center text-5xl font-semibold pb-5'>Shop by Category</h1>
            <Tabs>
                <TabList>
                    <div className='flex gap-5 w-6/12 justify-center mx-auto my-5'>
                        <Tab><button className='border-2 border-cyan-950 px-5'>Assault Rifles</button></Tab>
                        <Tab><button className='border-2 border-cyan-950 px-5'>Sniper Rifles</button></Tab>
                        <Tab><button className='border-2 border-cyan-950 px-5'>SubMachine Gun</button></Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className='mb-10'>
                        <h1 className=' text-center text-2xl font-semibold'>Assault Rifles(AR)</h1>
                        <div className='flex gap-20 justify-center mt-5 '>
                            {
                                ar.map(x => <div key={x._id} className='border p-20 bg-cyan-900 text-white rounded'>
                                    <img src={x.picture} alt="m416" className='w-96 rounded' />
                                    <h1 className='pt-5 text-xl font-semibold'>Name : {x.name}</h1>
                                    <p>Price : {x.price}</p>
                                    <p>Rating :{x.rating}</p>
                                    <button>View Details</button>
                                </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='mb-10'>
                        <h1 className=' text-center text-2xl font-semibold'>Sniper Rifles(SR)</h1>
                        <div className='flex gap-20 justify-center mt-5 '>
                            {
                                sr.map(x => <div key={x._id} className='border p-20 bg-cyan-900 text-white rounded'>
                                    <img src={x.picture} alt="m416" className='w-96 rounded' />
                                    <h1 className='pt-5 text-xl font-semibold'>Name : {x.name}</h1>
                                    <p>Price : {x.price}</p>
                                    <p>Rating :{x.rating}</p>
                                    <button>View Details</button>
                                </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='mb-10'>
                        <h1 className=' text-center text-2xl font-semibold'>Submachine Gun(SMG)</h1>
                        <div className='flex gap-20 justify-center mt-5 '>
                            {
                                smg.map(x => <div key={x._id} className='border p-20 bg-cyan-900 text-white rounded'>
                                    <img src={x.picture} alt="m416" className='w-96 rounded' />
                                    <h1 className='pt-5 text-xl font-semibold'>Name : {x.name}</h1>
                                    <p>Price : {x.price}</p>
                                    <p>Rating :{x.rating}</p>
                                    <button>View Details</button>
                                </div>)
                            }
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ShopByCategory