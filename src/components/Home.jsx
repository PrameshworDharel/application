import React from 'react'
 import Istock from '../assets/images/istock.jpg';
import Laptop from '../assets/images/laptop.jpg';
function Home() {
 console.log(Istock);
  return(
  <>
  <h1 class="text-3xl pl-11 text-center mt-20">This is Home pages.</h1>
  <button onClick={() =>alert("Home page button")} class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded mt-20 mb-20 ml-20"> Home Test Button </button>
<div class="flex justify-between ml-11 mr-20"> 
  <img src={Istock}alt='istock'></img>
  <img src={Laptop}alt="laptop"></img>
  </div>
  </>
  );
};
export default Home