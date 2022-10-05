import React from 'react';
import sponsorone from "../../img/sponsorone.png";
import sponsortwo from "../../img/sponsortwo.png";
import sponsorthree from "../../img/sponsorthree.png";
import sponsorfour from "../../img/sponsorfour.png";
import sponsorfive from "../../img/sponsorfive.png";
import sponsorsix from "../../img/sponsorsix.png";
import sponsorseven from "../../img/sponsorseven.png";
import "./sponsors.css";



export default function Sponsors() {
  return (
    <div className='sponsorsContainer'>

        <h2 className="sponsorsheader">
             Powered by
        </h2>


        <div className="anotheroverall">

                <div className='each-sponsor'>
                    <img className='sponsors-img' src={sponsorone} alt='sponsors' />
                </div>

                <div className='each-sponsor'>
                    <img className='sponsors-img' src={sponsortwo} alt='sponsors' />
                </div>

                <div className='each-sponsor'>
                    <img className='sponsors-img' src={sponsorthree} alt='sponsors' />
                </div>

                <div className='each-sponsor'>
                    <img className='sponsors-img' src={sponsorfour} alt='sponsors' />
                </div>

                <div className='each-sponsor'>
                    <img className='sponsors-img' src={sponsorfive} alt='sponsors' />
                </div>

                <div className='each-sponsor'>
                    <img className='sponsors-img' src={sponsorsix} alt='sponsors' />
                </div>

                <div className='each-sponsor'>
                    <img className='sponsors-img' src={sponsorseven} alt='sponsors' />
                </div>


         </div>

    </div>
  )
}
