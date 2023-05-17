import React from 'react'
import Laptop from '../assets/images/laptop.jpg';
import Istock from '../assets/images/istock.jpg';
import Driver from '../assets/images/driver.jpg';
import {Link} from 'react-router-dom';
function Blog() {
  return (
    <>
    <div className='main'>
    <div className='container'>
    <div className="image">
    <img src={Laptop}alt="laptop"></img>
           </div>
          <div className='content'>
          <div className='title'>
       <h3>Laptop</h3>
       </div>
       <div className='body'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic beatae, natus, maxime vel modi perspiciatis reprehenderit itaque nam pariatur nihil earum eos, magnam quaerat consequatur. Eveniet non voluptatibus ipsam ea.</p></div>
           
       </div>
               <div className='Btn'> 
               <Link to='https://prameshwor.com.np'>
               <button  >View more</button>
              </Link>
               </div>
               
</div>
<div className='container'>
    <div className="image">
    <img src={Istock}alt="istock"></img>
           </div>
          <div className='content'>
          <div className='title'>
       <h3>Istock</h3>
       </div>
       <div className='body'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic beatae, natus, maxime vel modi perspiciatis reprehenderit itaque nam pariatur nihil earum eos, magnam quaerat consequatur. Eveniet non voluptatibus ipsam ea.</p></div>
           
       </div>
               <div className='Btn'> 
               <Link to='https://freecodecamp.org'>
               <button >View more</button>
              </Link>
               </div>
               
                 </div>
                 <div className='container'>
    <div className="image">
    <img src={Driver}alt="driver"></img>
           </div>
          <div className='content'>
          <div className='title'>
       <h3>Driver</h3>
       </div>
       <div className='body'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic beatae, natus, maxime vel modi perspiciatis reprehenderit itaque nam pariatur nihil earum eos, magnam quaerat consequatur. Eveniet non voluptatibus ipsam ea.</p></div>
           
       </div>
               <div className='Btn'> 
               <Link to='https://Google.com'>
               <button >View more</button>
              </Link>
               </div>
     
            </div>
              </div>
   
    </>
    
  );
};
export default Blog