import React from 'react';
import Software from "../../img/Software.png";
import operate from "../../img/operate.png";
import stars from "../../img/stars.png";
import smartcontract from "../../img/smartcontract.png";
import moralisAcademyGuidance from "../../img/moralisAcademyGuidance.png";




export default function Courses() {
  return (
    <div className='coursContainer'>



    <div className='courseFirstContainer'>
      

        <div className='courseHeader'>
            <h1>Explore our courses & programs</h1>
        </div>

        <div className='containCourseLinks'>

              <div>All</div>

              <div>Financial</div>

              <div>Programming</div>

              <div>Digital Arts</div>

              <div>Online Marketing</div>

        </div>


        <div className='containSlider'>




          <div className='slidercontentcontainer'>

            <div className='img-title'>
               <img src={Software} alt='unknown'   />
               <h2>Web3 dApp Development</h2>
            </div>

            <div className='contents'>
                dApp Development is the process of 
                buillding decentralized applications with 
                backend code running on a decentralized
                peer-to-peer network.
            </div>

            <button>Get Started</button>

          </div>

 {/* seperate */}


          <div className='slidercontentcontainer'>

              <div className='img-title'>
                <img src={operate} alt='unknown'   />
                <h2>Web3 dApp Development</h2>
              </div>

              <div className='contents'>
                  dApp Development is the process of 
                  buillding decentralized applications with 
                  backend code running on a decentralized
                  peer-to-peer network.
              </div>

              <button>Get Started</button>

          </div>

{/* seperate */}


          <div className='slidercontentcontainer'>

                <div className='img-title'>
                  <img src={stars} alt='unknown'   />
                  <h2>Web3 dApp Development</h2>
                </div>

                <div className='contents'>
                    dApp Development is the process of 
                    buillding decentralized applications with 
                    backend code running on a decentralized
                    peer-to-peer network.
                </div>

                <button>Get Started</button>

          </div>



{/* seperate */}

          <div className='slidercontentcontainer'>

              <div className='img-title'>
                <img src={smartcontract} alt='unknown'   />
                <h2>Web3 dApp Development</h2>
              </div>

              <div className='contents'>
                  dApp Development is the process of 
                  buillding decentralized applications with 
                  backend code running on a decentralized
                  peer-to-peer network.
              </div>

              <button>Get Started</button>

          </div>
{/* Ended */}

         <div>
           circles
         </div>

        </div>

    </div>





    <div className='courseSecondcontainer'>

      <div className='moralisimgcontainer'>
        <img src={moralisAcademyGuidance} alt="moralis" />
      </div>

      <div className='text-courses'>
        <h1>Get Hands-On, Practical Guidance</h1>

        <div>
           Quizzes and assignment
           Building along to weekly 
           unique workshops
           500+ Video lessons
           24/7 on-Demand access
        </div>

      </div>

    </div>


    </div>
  )
}
