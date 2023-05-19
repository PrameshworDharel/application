import React from 'react'
import {ReactComponent as FacebookIcon} from "../assets/icon/facebook.svg";
import {ReactComponent as TwitterIcon}  from"../assets/icon/twitter.svg";
function About() {
  return (
    <>
    <h1 class="text-3xl pl-11 text-center mt-20">This is About pages.</h1>
    <div class="flex justify-between hover:text-red-500">
    <FacebookIcon />
    <TwitterIcon />
    </div>
   

    </>
     

  )
}
export default About