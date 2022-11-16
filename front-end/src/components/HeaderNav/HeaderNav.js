import React from 'react'
import {Link} from 'react-router-dom';
import "./HeaderNav.css"
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { BsFillPatchPlusFill } from 'react-icons/bs';



function HeaderNav(props){

   // THIS WILL BE RENDERING PAGES PER COOKIE LOGIN.......................

   let loggedIn = props.loggedIn;
    let currentRoutes = [];
  
    if(loggedIn){
        currentRoutes = [ 
         <li class='active'>
            <Link to="/">
               HOME
            </Link>
        </li>,

        <li>
            <Link to="/collections">
               COLLECTIONS
            </Link>
        </li>,

         <li><Link to='/products'>PRODUCTS</Link>
            <ul>
               <li><Link to='#'>Product 1</Link>
                  <ul>
                     <li><Link to='#'>Sub Product</Link></li>
                     <li><Link to="#">Sub Product</Link></li>
                  </ul>
               </li>
               <li><Link to='#'>Product 2</Link>
                  <ul>
                     <li><Link to='#'>Sub Product</Link></li>
                     <li><Link to="#">Sub Product</Link></li>
                  </ul>
               </li>
            </ul>
         </li>,

          <li>
            <Link to='/about'>
               ABOUT
            </Link>
         </li>,

        <li>
            <Link to="/contact">
               CONTACT
            </Link>
        </li>,

         <li>
            <Link to='/swap'>
               SWAP
            </Link>
         </li>
    ]
    } else {
        currentRoutes = [
        <li>
            <Link to="/user/login">
            Login
            </Link>
         </li>, 

         <li>
            <Link to="/user/register">
            Register
            </Link>  
        </li> 
        
    ]
      }

    return(




<div>
<header>
<nav id='cssmenu'>
<div class="logo"><a href="#">L.E.U.M.A.S </a></div>
<div id="head-mobile"></div>
<div onClick="" class="button"></div>
<ul>
{currentRoutes}
</ul>
</nav>
</header>




<div className ="headerNavBox">




<div className="iconDiv">
    <Link to="/checkout">
     <FaShoppingCart /> 
    </Link>


    <Link to="/createProduct">
     <BsFillPatchPlusFill /> 
    </Link>

    <Link to="/user/profile">
     <FaUser /> 
    </Link>
   </div>
   
<div className="searchBarBox">
<input className ="headerSearch" type="search" placeholder="Search"></input>
</div>


        

</div>

</div>
    );
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onClick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

export default HeaderNav;