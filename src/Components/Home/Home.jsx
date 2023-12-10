import React from 'react'
import Gallery from './Gallery'
import Banner from './Banner'
import ShopByCategory from './ShopByCategory';
import NewArivals from './NewArivals';
import BestSellerToys from './BestSellerToys';
import usetitle from '../../Hooks/useTitle';
import Reviews from './Reviews';

function Home() {
  usetitle('Home')
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <NewArivals></NewArivals>
      <BestSellerToys></BestSellerToys>
      <ShopByCategory></ShopByCategory>
      <Reviews/>
    </div>
  )
}

export default Home;