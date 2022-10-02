import React from 'react';
import rocket from "../../img/rocket.png";
import illustrationone from "../../img/illustrationone.png";
import illustrationtwo from "../../img/illustrationtwo.png";
import illustrationthree from "../../img/illustrationthree.png";
import illustrationfour from "../../img/illustrationfour.png";
import ellipsetwo from "../../img/Subtract.png";
import insideillustration from "../../img/insideillustration.png";
import "./gettingstarted.css";




export default function Gettingstarted() {
  return (

    <div className='gettingstartedContainer'>

       <div className='title'>
          <h1>Get started in web3</h1>
          <div>Start your dream career and secure a highpaying job with Optimus Pro Academy</div>
       </div>


       <div className='startedBody'>

         <div className='imagecontainer'>
           <img src={rocket}  alt='rocket image' />
         </div>






         <div className='rightside'>


           <div className='each-item'>
             
             <div className='img-hold'>
                <img className='illustrate' src={illustrationone} alt='img-contain' />
                <img className='covercircle' src={insideillustration} alt='contain-illustration-circle' />
             </div>

             <div className='test-right'>
                 <div className='heading'>Learn any high income digital skills (HIDS)</div>
                 <div className='text-main'>
                   Trading, Blockchain, Mobile App, Digital Art,
                   and online Marketing in a self-paced course
                   designed for your learning style.
                 </div>
             </div>

           </div>

 {/* seperate */}

           <div className='each-item'>

             <div className='test-right'>
                 <div className='heading'>Secure a high paying job or career </div>
                 <div className='text-main'>
                    Work with top companies anywhere in the
                    world either create or from the comfort of
                    your home.
                 </div>
             </div>


             <div className='img-hold'>
                <img className='illustrate' src={illustrationtwo} alt='img-contain' />
                <img className='covercircle' src={insideillustration} alt='contain-illustration-circle' />
             </div>

           </div>


 {/* seperate */}


           <div className='each-item'>
             
             <div className='img-hold'>
                <img className='illustrate' src={illustrationthree} alt='img-contain' />
                <img className='covercircletwo' src={insideillustration} alt='contain-illustration-circle' />
             </div>

             <div className='test-right'>
                 <div className='heading'>Get certified in an in-demand skill</div>
                 <div className='text-main'>
                    Receive a unique NFT as a certfiicate and 
                    get recognized by industry leaders.
                 </div>
             </div>

           </div>


{/* seperate */}



            <div className='each-item'>

                <div className='test-right'>
                    <div className='heading'>Levitate above financial instabibilty</div>
                    <div className='text-main'>
                      Receive a unique NFT as a certfiicate and 
                      get recognized by industry leaders.
                    </div>
                </div>


                <div className='img-hold'>
                  <img className='illustrate' src={illustrationfour} alt='img-contain' />
                  <img className='covercircletwo' src={insideillustration} alt='contain-illustration-circle' />
                </div>

            </div>







         </div>


       
       </div>


       <img className='ellipsetwo' src={ellipsetwo} />



    </div>
  )
}
