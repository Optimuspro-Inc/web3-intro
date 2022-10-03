import React from 'react';
import "./home.css";
import illustration from "../../img/54.png";
import ellipse from "../../img/Ellipse.png";
import Gettingstarted from '../../components/homecompo/Gettingstarted';
import Courses from '../../components/homecompo/Courses';
import News from '../../components/homecompo/News';
import Team from '../../components/homecompo/Team';
import Community from '../../components/homecompo/Community';
import Sponsors from '../../components/homecompo/Sponsors';





export default function Home() {
  return (
    <div className='homeContainer'>


        <div className='firstContain'>
            




            <div className='leftContainer'>

                
                <h2>Get in-demand skills to
                    grow your career in the 
                    web3 industry
                </h2>

                <div className='moreinfo'>Learn from industry experts, get internships, jobs and 
                    career opportunities. We provide quality education and
                    training while you pay less for more.
                </div>


                <div className='buttonhold'>

                    <button className='start'>start</button>

                    <button className='videos'>videos</button>

                </div>


            </div>





           <div className='rightContainer'>
               <img className='illustration' src={illustration} />
           </div>


           <img className='ellipse' src={ellipse} />




        </div>



        <Gettingstarted />
        <Courses />
        <News />
        <Team />
        <Community />
        <Sponsors />






    </div>
  )
}
