import React from 'react'
import {Nav, Navbar}  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faUtensils,faBurger, } from '@fortawesome/free-solid-svg-icons'

const Deli = () => {
  return (
    <div className='Deli'>
        <div className='Heading'>
            <h3>Delicious meals from Adnegs Foods</h3>
            <h2>Most Popular Delicacies</h2>
        </div>
        <div className='product-icons'>
          <div className='product-icon-div'>
          <FontAwesomeIcon  icon={faCoffee} className='deli-icon'  />
          <p>Popular <br /> <b>Breakfast</b></p>
          
          </div> 
          <div className='product-icon-div'>
          <FontAwesomeIcon icon={faUtensils} className='deli-icon' />
          <p>Special <br /> <b>Lunch</b></p>
          </div>
          <div className='product-icon-div'>
          <FontAwesomeIcon icon={faBurger} className='deli-icon' />
          <p>Lovely <br /> <b>Dinner</b></p>
          </div>

       
        </div>

    </div>
  )
}

export default Deli