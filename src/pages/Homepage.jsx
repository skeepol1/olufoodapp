import React from 'react'
import Navbar from '../components/Navbar'
import Spin from '../components/Spin'
import Ourservices from '../components/Ourservices'
import About from '../components/About'
import Chef from '../components/Chef'
import Deli from '../components/Deli'
import Product from '../components/Product'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Spin />
        <Ourservices />
        <About />
        <Chef />
        <Deli />
        <Product />
        <Contact />
        < Footer />

    </div>
  )
}

export default Homepage