import React from 'react'
import Laptop from '../assets/images/laptop.jpg';
import Istock from '../assets/images/istock.jpg';
import {Link} from 'react-router-dom';
function Blog() {
  return (
    <>
    <div class="flex gap-7 mr-20 ml-20 mt-20 shadow-md ">
    <div class="shadow-lg">
    <img src={Laptop}alt="laptop"></img>
          <div>
       <h3 class="bold ml-1 text-3xl">Laptop</h3>
       <div class="m-1 p-1">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic beatae, natus, maxime vel modi perspiciatis reprehenderit itaque nam pariatur nihil earum eos, magnam quaerat consequatur. Eveniet non voluptatibus ipsam ea.</p></div>
           
       </div>
               <div class='mb-5 flex justify-center bg-slate-300 border-r-2'> 
               <Link to='https://prameshwor.com.np'>
               <button  >View more</button>
              </Link>
               </div>
               </div>
               <div class="shadow-lg">
    <img src={Laptop}alt="laptop"></img>
          <div>
       <h3 class="bold ml-1 text-3xl">Laptop</h3>
       <div class="m-1 p-1">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic beatae, natus, maxime vel modi perspiciatis reprehenderit itaque nam pariatur nihil earum eos, magnam quaerat consequatur. Eveniet non voluptatibus ipsam ea.</p></div>
           
       </div>
               <div class='mb-5 flex justify-center bg-slate-300 border-r-2'> 
               <Link to='https://prameshwor.com.np'>
               <button  >View more</button>
              </Link>
               </div>
               </div>
            

   <div class="shadow-lg ">
    <div>
    <img src={Istock}alt="istock"></img>
           </div>
          <div >
       <h3 class="bold ml-1 text-3xl">Istock</h3>
       <div class="m-1 p-1">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Hic beatae, natus, maxime vel modi perspiciatis reprehenderit itaque nam pariatur nihil earum eos, magnam quaerat consequatur. Eveniet non voluptatibus ipsam ea.</p></div>
           
       </div>
               <div class='mb-5 flex justify-center  bg-slate-300 border-r-2'> 
              <Link to='https://prameshwor.com.np'>
               <button  >View more</button>
              </Link>
               </div>
               
            </div>
            </div>
   
    </>
    
  );
};
export default Blog