import React from 'react';
import teamone from "../../img/teamone.png";
import teamtwo from "../../img/teamtwo.png";
import teamthree from "../../img/teamthree.png";
import teamfour from "../../img/teamfour.png";


export default function Team() {
  return (
    <div className='teamContainer'>
        
          <div className='firstdiv'>

              <div className='mini-header'>
                  WHAT OTHERS ARE SAYING
              </div>

              <h1>Don’t just take our word for it...</h1>
              
          </div>



          <div className='seconddiv'>





             <div className='teamsectionContainer'>

               <div className='img-header'>
                  
                  <div className='imgteamcontain'>
                     <img src={teamone} alt='team member' />
                  </div>

                  <div className='team-name'>Hakim Abam</div>

                  <div className='team-job'>ALTCOIN TRADER</div>

               </div>


               <div className='team-job-description'>
                    Lorem ipsum dolor 
                    sit amet, consectetur 
                    adipiscing elit. Nuncvulp
                    utate libeinterdum
               </div>



             </div>

 {/* seperate */}



          <div className='teamsectionContainer'>

              <div className='img-header'>
                
                <div className='imgteamcontain'>
                    <img src={teamtwo} alt='team member' />
                </div>

                <div className='team-name'>John Martins</div>

                <div className='team-job'>BRAND DESIGNER</div>

              </div>


              <div className='team-job-description'>
                  Lorem ipsum dolor 
                  sit amet, consectetur 
                  adipiscing elit. Nuncvulp
                  utate libeinterdum
              </div>



          </div>

{/* seperate */}



          <div className='teamsectionContainer'>

              <div className='img-header'>
                
                <div className='imgteamcontain'>
                    <img src={teamthree} alt='team member' />
                </div>

                <div className='team-name'>Lola Akanni</div>

                <div className='team-job'>WEB2.0 DEVELOPER</div>

              </div>


              <div className='team-job-description'>
                  Lorem ipsum dolor 
                  sit amet, consectetur 
                  adipiscing elit. Nuncvulp
                  utate libeinterdum
              </div>



          </div>

{/* seperate */}



            <div className='teamsectionContainer'>

                  <div className='img-header'>
                    
                    <div className='imgteamcontain'>
                        <img src={teamfour} alt='team member' />
                    </div>

                    <div className='team-name'>Juliet Nduka</div>

                    <div className='team-job'>PRODUCT MANAGER</div>

                  </div>


                  <div className='team-job-description'>
                      Lorem ipsum dolor 
                      sit amet, consectetur 
                      adipiscing elit. Nuncvulp
                      utate libeinterdum
                  </div>



            </div>

{/* seperate */}





          </div>

    </div>
  )
}
