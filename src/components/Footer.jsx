import React from 'react'
import {Nav , Button}  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone ,faHouse, faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-head'>
            <div className='footer-headings'>
                <h4>Adnegs Foods</h4>
                {/* <li>About</li>
                <li>Product</li>
                <li>Contact</li> */}
            
            <li> <Nav.Link href="/about">ABOUT</Nav.Link> </li>
            <li><Nav.Link href="/product">PRODUCTS</Nav.Link> </li>
            <li> <Nav.Link className='bg' href="/contact">CONTACTS</Nav.Link> </li>
                
            </div>
            <div className='footer-headings'>
             <h4>Contacts</h4>
            <p> <FontAwesomeIcon icon={faHouse}  /> Abeokuta, Ogun State. <br />
                <FontAwesomeIcon icon={faPhone}  /> 2348082954483 <br />
                 <FontAwesomeIcon icon= {faEnvelopesBulk}/> info@gmail.com </p>

            </div>
            <div className='footer-headings'>
                <h4>Opening</h4>
                 <p> Monday - Saturday <br />
                10AM - 9PM <br />
                Sunday <br />
                12PM - 4PM <br />
                </p>
            </div>
            <div className='footer-headings'>
            <h4>Newsletter</h4>
            <p>Get updated on our new dishes <br />
             and delicious discounts by <br />
             subscribing to our newsletter.</p>
             <div className='email-container'>
             <input type="text" placeholder='Your Email'  />
             <Button style={{backgroundColor: 'orange'}}>Sign Up</Button>
             </div>
             
            </div>
        </div>
        
        <div className='container'>
           <hr className='custom-hr'/>
        </div>


<div className='last-footer'>
    <div className='last-left'>
        <p>© Adnegs Foods, All Rights Reserved.</p>
    </div>
    <div className='last-right'>
    <Nav.Link href="/">HOME</Nav.Link> 
    <Nav.Link href="/">FAQs</Nav.Link> 
    
    </div>

    

</div>


        
    </div>
  )
}

export default Footer