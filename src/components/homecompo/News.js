import React from 'react';
import newsone from "../../img/newsone.png";
import newstwo from "../../img/newstwo.png";
import newsthree from "../../img/newsthree.png";
import certificate from "../../img/certificate.png";
import leftEllipse from "../../img/leftEllipse.png";
import "./news.css";


export default function News() {
  return (
    <div className='newsContainer'>
         <div className='firstContainernews'>

           <h1>Stay up to date with Web3 news</h1>




           <div className='newsdescription'>



             <div className='detailsContain'>

               <div className='detailsimgContain'>
                  <img className='newsimage' src={newsone} alt='desc' />
               </div>

               <div className='descriptiondetails'>
                 <h3 className='newseachheader' >Why the Web3.0 Matters and you should know about it</h3>

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

              <div className='detailsContaintwo'>

                  <div className='detailsimgContain'>
                    <img className='newsimage' src={newstwo} alt='desc' />
                  </div>

                  <div className='descriptiondetails'>
                    <h3 className='newseachheader' >Why the Web3.0 Matters and you should know about it</h3>

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
                    <img className='newsimage' src={newsthree} alt='desc' />
                  </div>

                  <div className='descriptiondetails'>
                    <h3 className='newseachheader' >Why the Web3.0 Matters and you should know about it</h3>

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
              <h1 className='newsheaderone' >Become <br /> Blockchain Certified</h1>

              <div className='optimus-text'>
                Optimus Pro Academy has been already 
                helped  countless people around the world.
              </div>

              <div className='areyounext'>
                ARE YOU NEXT?
              </div>


              <div className="newsbuttoncontainer">

                  <button>
                      Begin your career
                  </button>

              </div>


           </div>



           <div className='right-second'>
              <img src={certificate} alt='certificate' />
              <img className='ellipsenews' src={leftEllipse} />
           </div>

        </div>
    </div>
  )
}
