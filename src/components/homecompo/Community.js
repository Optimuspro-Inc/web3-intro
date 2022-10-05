import React from 'react';
import community from "../../img/community.png";
import tv from "../../img/tv.png";
import chat from "../../img/chat.png";
import left from "../../img/leftdisplay.png";
import right from "../../img/rightdisplay.png";
import "./community.css";


export default function Community() {
  return (
    <div className='communityContainer'>


      <h2 className="headerforcommunity">
          Join Our Community
      </h2>

      <div className="overallforthisguys">
         
         <div className="coat">
            <img src={tv} alt='' />
         </div>



          <div className="middlearrange">

                <img src={community} alt=''  />

                <div className="containupleft">
                    <div className="textcontain">NETWORK</div>
                </div>


                <div className="containdownleft">
                   <div className="textcontain">SHARE IDEAS</div>
                </div>


                <div className="containupright">
                    <div className="textcontain">LEARN</div>
                </div>


                <div className="containdownright">
                    <div className="textcontain">COLLABORATE</div>
                </div>



          </div>


          <div className="coat">
            <img src={chat} alt='' />
          </div>

      </div>
    </div>
  
  )
}
 