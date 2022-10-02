import React from 'react';
import newsone from "../../img/newsone.png";
import newstwo from "../../img/newstwo.png";
import newsthree from "../../img/newsthree.png";
import certificate from "../../img/certificate.png";



export default function News() {
  return (
    <div className='newsContainer'>
         <div className='firstContainernews'>

           <h1>Stay up to date with Web3 news</h1>




           <div className='newsdescription'>



             <div className='detailsContain'>

               <div className='detailsimgContain'>
                  <img src={newsone} alt='desc' />
               </div>

               <div className='descriptiondetails'>
                 <h3>Why the Web3.0 Matters and you should know about it</h3>

                 <div className='textdetails'>
                    There’s plenty of buzz around the web
                    3.0 and the sweeping changes it will 
                    bring to the industry.
                 </div>

                 <div className='readmore'>
                     Read More (arrow)
                 </div>

               </div>

             </div>

              {/* seperate */}

              <div className='detailsContain'>

                  <div className='detailsimgContain'>
                    <img src={newstwo} alt='desc' />
                  </div>

                  <div className='descriptiondetails'>
                    <h3>Why the Web3.0 Matters and you should know about it</h3>

                    <div className='textdetails'>
                      There’s plenty of buzz around the web
                      3.0 and the sweeping changes it will 
                      bring to the industry.
                    </div>

                    <div className='readmore'>
                        Read More (arrow)
                    </div>

                  </div>

              </div>

              {/* seperate */}

              <div className='detailsContain'>

                  <div className='detailsimgContain'>
                    <img src={newsthree} alt='desc' />
                  </div>

                  <div className='descriptiondetails'>
                    <h3>Why the Web3.0 Matters and you should know about it</h3>

                    <div className='textdetails'>
                      There’s plenty of buzz around the web
                      3.0 and the sweeping changes it will 
                      bring to the industry.
                    </div>

                    <div className='readmore'>
                        Read More (arrow)
                    </div>

                  </div>

              </div>

              {/* end */}


            
           </div>

         </div>



         

         <div className='secondContainernews'>
           
           <div className='left-second'>
              <h1>Become Blockchain Certified</h1>

              <div>
               Optimus Pro Academy has been already 
                helped  countless people around the world.
              </div>

              <div>
                ARE YOU NEXT?
              </div>

              <button>
                  Begin your career
              </button>

           </div>



           <div className='right-second'>
              <img src={certificate} alt='certificate' />
           </div>

        </div>
    </div>
  )
}
