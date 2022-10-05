import React from 'react';
import Software from "../../img/Software.png";
import operate from "../../img/operate.png";
import stars from "../../img/stars.png";
import smartcontract from "../../img/smartcontract.png";
import moralisAcademyGuidance from "../../img/moralisAcademyGuidance.png";
import "./courses.css";




export default function Courses() {
  return (
    <div className='coursContainer'>



    <div className='courseFirstContainer'>
      

        <div className='courseHeader'>
            <h1 className='courseh1'>Explore our courses & programs</h1>
        </div>

        <div className='containCourseLinks'>

              <div className='courseactive' >All</div>

              <div className='courseinactive' >Financial</div>

              <div className='courseinactive' >Programming</div>

              <div className='courseinactive' >Digital Arts</div>

              <div className='courseinactive' >Online Marketing</div>

        </div>


        <div className='containSlider'>




          <div className='slidercontentcontainerone'>

            <div className='img-title'>
               <img className='operateothers' src={Software} alt='unknown'   />
               <div className='sliderheader' >Web3 dApp Development</div>
            </div>

            <div className='contents'>
                dApp Development is the process of 
                buillding decentralized applications with 
                backend code running on a decentralized
                peer-to-peer network.
            </div>
    
            <div className="sliderbuttoncontain">
                <button className='sliderbutton'>Get Started</button>
            </div>


          </div>

 {/* seperate */}


          <div className='slidercontentcontainer'>

              <div className='img-title'>
                <img className='operate' src={operate} alt='unknown'   />
                <div className='sliderheader' >Web3 dApp Development</div>
              </div>

              <div className='contents'>
                  dApp Development is the process of 
                  buillding decentralized applications with 
                  backend code running on a decentralized
                  peer-to-peer network.
              </div>

              <div className="sliderbuttoncontain">
                <button className='sliderbutton'>Get Started</button>
              </div>

          </div>

{/* seperate */}


          <div className='slidercontentcontainerone'>

                <div className='img-title'>
                  <img className='operateothers' src={stars} alt='unknown'   />
                  <div className='sliderheader' >Web3 dApp Development</div>
                </div>

                <div className='contents'>
                    dApp Development is the process of 
                    buillding decentralized applications with 
                    backend code running on a decentralized
                    peer-to-peer network.
                </div>

                <div className="sliderbuttoncontain">
                   <button className='sliderbutton'>Get Started</button>
                </div>

          </div>



{/* seperate */}

          <div className='slidercontentcontainerone'>

              <div className='img-title'>
                <img className='operateothers' src={smartcontract} alt='unknown'   />
                <div className='sliderheader' >Web3 dApp Development</div>
              </div>

              <div className='contents'>
                  dApp Development is the process of 
                  buillding decentralized applications with 
                  backend code running on a decentralized
                  peer-to-peer network.
              </div>

                  <div className="sliderbuttoncontain">
                    <button className='sliderbutton'>Get Started</button>
                 </div>

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

        <div className='courses-text-desc'>
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
