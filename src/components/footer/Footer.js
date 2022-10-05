import React from 'react';
import Newsetter from '../homecompo/Newsetter';
import "./footer.css";



export default function Footer() {
  return (

    <div className='footerContainer'>

        <Newsetter />


    <div className="otherlinks">


{/* beginning of first row */}
  <div className="firstrow">


          <div className="eachfootercolumn">

              <div className="header">
                ACADEMY
              </div>

              <div className="other-items">
                About Us
              </div>

              <div className="other-items">
                Community Forum
              </div>

              <div className="other-items">
                Contact Us
              </div>

              <div className="other-items">
                 Courses
              </div>

          </div>

{/* seperate */}


      <div className="eachfootercolumn">

          <div className="header">
            BUSINESS
          </div>

          <div className="other-items">
            For Business
          </div>

          <div className="other-items">
            Affiliates
          </div>

          <div className="other-items">
            Careers
          </div>

          <div className="other-items">
             Launchpad
          </div>

      </div>

{/* seperate */}



      <div className="eachfootercolumn">

          <div className="header">
             CONTENT
          </div>

          <div className="other-items">
             Blog
          </div>

          <div className="other-items">
             Podcast
          </div>

          <div className="other-items">
             Videos
          </div>

          <div className="other-items">
             Resources
          </div>

      </div>

{/* seperate */}




      <div className="eachfootercolumn">

          <div className="header">
            PRODUCTS
          </div>

          <div className="other-items">
            Wallets
          </div>

          <div className="other-items">
             Exchange
          </div>

          <div className="other-items">
             NFT Marketplace
          </div>

          <div className="other-items">
            Automated Trading
            System
          </div>

      </div>

{/* seperate */}


</div>
{/* end of first row */}



{/* beginning of second row */}
    <div className="firstrow">


    <div className="eachfootercolumn">

            <div className="header">
               Quick Links
            </div>

            <div className="other-items">
               Home
            </div>

            <div className="other-items">
               About
            </div>

            <div className="other-items">
               Login Up
            </div>

            <div className="other-items">
               Sign Up
            </div>

      </div>

{/* seperate */}


     <div className="follow">
        <div className="headerfollow">Follow Us</div>

        <div className="socials">

        </div>

     </div>
      

    </div>
{/* end of second row */}


          
     </div>
{/* end of other links */}



   <div className="bottomside">

     <div className="firstpart">
        <div className="eachfirstpart">HELP</div>
        <div className="eachfirstpart">TERMS</div>
        <div className="eachfirstpart">PRIVACY POLICY</div>
        <div className="eachfirstpart">REFUND POLICY</div>
     </div>

     <div className="secondpart">
           (c) Optimus  Pro Academy. All Rights Reserved 2022
     </div>

   </div>

     
    </div>

  )
}
