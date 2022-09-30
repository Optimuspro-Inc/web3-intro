import React from 'react';
import "./header.css";
import logo from "../../img/optimuslogo.png";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate  } from 'react-router-dom';



export default function Header() {
    let navigate = useNavigate();




    const goto = (link) => {
    
          navigate(link);
          
      }
    


  return (


    <div className='headerContainer'>

        <div className='logo'>
          <img  src={logo} />
        </div>


        <div className='linksContain'>

            <div onClick={ () => goto("/") } >
               Home
            </div>


            <div onClick={ () => goto("/learn") } >
              Learn
            </div>


            <div onClick={ () => goto("/Pricing") } >
              Pricing
            </div>


            <div onClick={ () => goto("/Blog") } >
              Blog
            </div>


            <div onClick={ () => goto("/Community") } >
              Community
            </div>


            <div onClick={ () => goto("/About") } >
              About Us
            </div>



          <form className="formsearch">
             <input  className="input" placeholder="Search"  /> <SearchIcon />
          </form>

 

              <div>
                  login
              </div>

              <div className='signup'>
                 Sign Up
              </div>


              <div>
                 ld
              </div>




        </div>



    </div>


  )
}
