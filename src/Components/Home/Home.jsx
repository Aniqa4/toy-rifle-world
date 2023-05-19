import React from 'react'
import Gallery from './Gallery'
import Banner from './Banner'
import ShopByCategory from './ShopByCategory';

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
    </div>
  )
}

export default Home;