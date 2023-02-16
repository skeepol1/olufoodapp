import React from 'react'
import { Link } from 'react-router-dom';
import {Image, Button, Card, Spinner} from 'react-bootstrap';
import heroImage from '../img/herofood.png'
import backgroundImg from '../img/krista-.jpg'
// import Button from './Button'




const spin = () => {
  return (
  <div className='flex'>
    {/* <div className='backdrop'> */}
      <div className='flex-left'>
        <h1>Enjoy Our <br /> Delicious Meal</h1>
        <div className='flex-para'>
        <p>Our menu offers something for everybody, from excellent client benefit to <br />
         the best quality fixings.
         </p>
       
        <Link to="/" className="btn test2 py-2 px-4 justify-start">
              Book A Table
            </Link>

        </div>
        
      </div>
      <div className="App-header">
        <img src={heroImage} className="App-logo" alt="hero" />
       
      </div>
    {/* </div> */}
      
        
     
      
       
    </div>
  )
}

export default spin