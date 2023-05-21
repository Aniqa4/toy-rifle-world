import React from 'react'
import Gallery from './Gallery'
import Banner from './Banner'
import ShopByCategory from './ShopByCategory';
import NewArivals from './NewArivals';
import BestSellerToys from './BestSellerToys';
import usetitle from '../../Hooks/useTitle';

function Home() {
  usetitle('Home')
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <NewArivals></NewArivals>
      <BestSellerToys></BestSellerToys>
      <ShopByCategory></ShopByCategory>
    </div>
  )
}

export default Home;