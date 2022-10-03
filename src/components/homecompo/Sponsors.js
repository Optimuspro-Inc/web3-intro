import React from 'react';
import sponsorone from "../../img/sponsorone.png";
import sponsortwo from "../../img/sponsortwo.png";
import sponsorthree from "../../img/sponsorthree.png";
import sponsorfour from "../../img/sponsorfour.png";
import sponsorfive from "../../img/sponsorfive.png";
import sponsorsix from "../../img/sponsorsix.png";
import sponsorseven from "../../img/sponsorseven.png";



export default function Sponsors() {
  return (
    <div className='sponsorsContainer'>

         <div className='each-sponsor'>
             <img src={sponsorone} alt='sponsors' />
         </div>

         <div className='each-sponsor'>
             <img src={sponsortwo} alt='sponsors' />
         </div>

         <div className='each-sponsor'>
             <img src={sponsorthree} alt='sponsors' />
         </div>

         <div className='each-sponsor'>
             <img src={sponsorfour} alt='sponsors' />
         </div>

         <div className='each-sponsor'>
             <img src={sponsorfive} alt='sponsors' />
         </div>

         <div className='each-sponsor'>
             <img src={sponsorsix} alt='sponsors' />
         </div>

         <div className='each-sponsor'>
             <img src={sponsorseven} alt='sponsors' />
         </div>


    </div>
  )
}
