// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import {Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUserTie ,faCartPlus,  faHeadset} from '@fortawesome/free-solid-svg-icons'

const Ourservices = () => {
  return (
  <div className='service'>
      <div className='middle'>
         <h2>Our Services</h2>
        
      </div>

      <div className='service-flex'>
      <Card border='0'  className='hover' style={{ width: '18rem', height: '50vh' }}>
        
      <Card.Body className='outline'>
        <Card.Title mt-4><FontAwesomeIcon icon={faUserTie} className="icons" /></Card.Title>
        <Card.Subtitle className="mb-2 text-dark"><h5>Chief Chef</h5></Card.Subtitle>
        <Card.Text className='mb-2 text-dark'>
        We hire only the best chefs in Africa. All of whom undergo a 6 months training under our chief chef, who is non other than Mr. Dayo D1, Award winner of the Nigerian Men can cook award 2002
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card border='0' className='hover' style={{ width: '18rem', height: '50vh' }}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faUtensils} className="icons" /></Card.Title>
        <Card.Subtitle className="mb-2 text"><h5>Healthy Food</h5></Card.Subtitle>
        <Card.Text>
        We use only the healthiest <br /> methods to cook our foods. <br /> Routine cleanups have also <br /> been set up for our <br /> equipments, utensils, br
         furnitures and co.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card border='0' className='hover' style={{ width: '18rem', height: '50vh' }}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={faCartPlus} className="icons" /></Card.Title>
        <Card.Subtitle className="mb-2 text"><h5>Online Order</h5></Card.Subtitle>
        <Card.Text>
        You can now get your meals delivered to your doorstep by placing your orders on our website or mobile app.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    <Card border='0' className='hover' style={{ width: '18rem', height: '50vh' }}>
      <Card.Body>
        <Card.Title><FontAwesomeIcon icon={ faHeadset} className="icons" /></Card.Title>
        <Card.Subtitle className="mb-2 text-"><h5>Customer Care</h5></Card.Subtitle>
        <Card.Text>
        Any issues? We will resolve them as soon as they appear with our hardworking Customer support team who are made available to you 24/7
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>



      </div>

  </div>
  )
}

export default Ourservices