import React from 'react';
import hand from "../../img/hand.png";
import SearchIcon from '@mui/icons-material/Search';
import "./newsletter.css";


export default function Newsetter() {

  return (
    <div className='newsletterContainer'>

        <div className='formvalscontain'>

            <div className="suscribe">
                Get Newletter by<br />
                subscribing now!
            </div>

            <form className="formsearchnewsletter">
                <input  className="input" placeholder="Email Address"  /> 
            </form>

            <div className="handcontain">
                <img src={hand} alt="" className="handitself" />
            </div>

        </div>


    </div>
  )
}
