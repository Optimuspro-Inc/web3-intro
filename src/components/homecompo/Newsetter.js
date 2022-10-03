import React from 'react';
import hand from "../../img/hand.png";
import SearchIcon from '@mui/icons-material/Search';


export default function Newsetter() {

  return (
    <div className='newsletterContainer'>

        <div className='formvalscontain'>

            <div className="suscribe">
                Get Newletter by
                subscribing now!
            </div>

            <form className="formsearch">
                <input  className="input" placeholder="Email Address"  /> 
            </form>

            <div className="handcontain">
                <img src={hand} alt="" className="handitself" />
            </div>

        </div>


    </div>
  )
}
