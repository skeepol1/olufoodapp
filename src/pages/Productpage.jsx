import React from 'react'
import Navbar from '../components/Navbar'
import Productbanner from '../components/Productbanner'
import Deli from '../components/Deli'
import Product from '../components/Product'
import Footer from '../components/Footer'

const Productpage = () => {
  return (
    <div>
        <Navbar /> 
        <Productbanner />
        <Deli />
        <Product />
        <Footer />

    </div>
  )
}

export default Productpage