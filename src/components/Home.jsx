import React from 'react'
 import Istock from '../assets/images/istock.jpg';
import Laptop from '../assets/images/laptop.jpg';
function Home() {
 console.log(Istock);
  return(
  <>
  <h1>This is Home pages.</h1>
  <button onClick={() =>alert("Home page button")}> Home Test Button </button>
<div class="image">
  <img src={Istock}alt='istock'></img>
  <img src={Laptop}alt="laptop"></img>
  </div>
  </>
  );
};
export default Home