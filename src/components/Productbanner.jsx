import React from 'react'
import { Nav } from 'react-bootstrap'

const Productbanner = () => {
  return (
    <div className='About-banner'>
         <div className='about-banner-head'>
            <h1>Adnegs Foods Amazing Products</h1>

          
           <div className='about-list'>
           <li> <Nav.Link href="/about">ABOUT</Nav.Link> </li>
            <li><Nav.Link href="/product">PRODUCTS</Nav.Link> </li>
            <li> <Nav.Link className='bg' href="/contact">CONTACTS</Nav.Link> </li>        
            </div> 
           
             
            
                
            
        </div>


    </div>
   
  )
}

export default Productbanner