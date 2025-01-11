import React from 'react'
import Banner from '../banner/Banner'
import Featured from '../featured/Featured'
import Products from './Produts'

export default function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Featured></Featured>
    </div>
  )
}
