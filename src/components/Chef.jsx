import React from 'react'
import workPics from '../img/Team1.png';
import workPics2 from '../img/Team2.png';
import workPics3 from '../img/Team3.png';
import workPics4 from '../img/Team4.png';

const chef = () => {
  return (
    <div className='chef'>
        <div className='team'>
            <h2>Team Members</h2>
            <h1>Our Chief Chefs</h1>
        </div>
        <div className='Workers'>
            <div className='our-chefs'>
                
                <img src={workPics} className ='chef-name' alt="" />
                <div className='chef-middle'>
                <h3>Oyindamola T.</h3>
                <p>Captain Chef</p>
                </div>
                
            </div>
            <div className='our-chefs'>
            <img src={workPics2} className ='chef-name' alt="" />
            <div className='chef-middle'>
                <h3>Oyin T.</h3>
                <p>Captain Chef</p>
                </div>
            
                
            </div>
            <div className='our-chefs'>
            <img src={workPics3} className ='chef-name' alt="" />
            <div className='chef-middle'>
                <h3>Oyindamola T.</h3>
                <p>Captain Chef</p>
                </div>
            
            </div>
            <div className='our-chefs'>
            <img src={workPics4} className ='chef-name' alt="" />
            <div className='chef-middle'>
                <h3>Damola T.</h3>
                <p>Captain Chef</p>
                </div>
            
            </div>
        </div>


      
            

    </div>
  )
}

export default chef