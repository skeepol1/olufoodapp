import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import aboutImage from '../img/about-1.jpg'
import aboutTwo from '../img/about-2.jpg'
import aboutThree from '../img/about-3.jpg'
// import aboutFour from '../img/about-4.jpg'

const about = () => {
  return (
    <div className='About-us'>
        <div className='about-left'>
        <Carousel className='center' variant="dark">
      <Carousel.Item>
       <img src={aboutImage} alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={aboutTwo} alt="" />
       
      </Carousel.Item>
      <Carousel.Item>
       <img src={aboutThree} alt="" />
        
      </Carousel.Item>
    </Carousel>

            
        </div>
        <div className='about-right'>
        <div className='about-head'>
          <h3>about us </h3>
          <h1><FontAwesomeIcon icon={faUtensils} className="icons" />  Olu's Food's story </h1>
          <p>CEO, Oluleye Stephen, opened the first Olu's Foods Restaurant in 
            Lagos on January 27, 2023. Today, there are 7 branches all
            over West Africa. Olu's Foods Restaurants are well known with a 
            substantial gathering of people including families, kids, 
            seniors, and business experts. Our benevolent condition is
            perfect for praising unique events, facilitating a business
            lunch, or assembling for a flavorful dinner with loved ones.
            Open day by day for lunch and dinner, Olu's Foods offers a
            choice of naturally arranged things utilizing just the best
            fixings accessible.</p>
          <p>Our top picks incorporate crisp fish, rotisserie chicken, infant
             back pork ribs. New prepared pot pie, strength plates of mixed 
             greens, wood-let go pizzas, pasta, sandwiches, burgers, and 
             more. Adnegs Food's heated merchandise and treats including our 
             Six-Layer Chocolate Motherlode Cake, Scratch Carrot Cake, and 
             delectably rich cream cheddar pies are prevalent top choices 
             with our visitors.</p>
        </div>
        <div className='about-down'>
          <div className='about-5'>
            <h1>5</h1>
            <div className='exp'>
            <p>Years of  <br /><b>Experince</b> </p>
            </div>
            
          </div>
          <div className='about-5'>
            <h1>50</h1>
            <div className='exp'>
            <p>Years of  <br /><b>Experince</b> </p>
            <p></p>
            </div>
         
            
           
            
          </div>
          
          
          
        </div>
        
        </div>
    </div>
  )
}

export default about