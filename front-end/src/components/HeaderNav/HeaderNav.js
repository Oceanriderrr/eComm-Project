import React from 'react'
import {Link} from 'react-router-dom';
import "./HeaderNav.css"
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { BsFillPatchPlusFill } from 'react-icons/bs';



function HeaderNav(props){

   // THIS WILL BE RENDERING PAGES PER COOKIE LOGIN.......................
console.log(props);
   let loggedIn = props.loggedIn;

   let isAdmin = props.isAdmin;
console.log(123);
console.log(props.loggedIn);

   let currentIcons = [];

    let currentRoutes = [];
  

    //Logged in as admin
    if(loggedIn){
    
      currentRoutes = [ 



         <li>
         <Link to="/user/login">
         Logout
         </Link>
         </li>, 

<li>
<Link to="/createproduct">
CREATE
</Link>
</li>, 

<li>
<Link to="/editproduct">
EDIT
</Link>
</li>, 

<li>
<Link to="/delete/login">
DELETE
</Link>
</li>, 

    ]
// logged in as user
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
<div onClick= "myFunction()"   class="button"></div>
<ul>     
  <li>
            <Link to="/collections">
               COLLECTIONS
            </Link>
   </li>
   
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
         </li>
<li>
            <Link to='/about'>
               ABOUT
            </Link>
         </li>

        <li>
            <Link to="/contact">
               CONTACT
            </Link>
        </li>


{currentRoutes}
</ul>
<div className="iconDiv">
    <Link to="/checkout">
     <FaShoppingCart /> 
    </Link>

{currentIcons}


    <Link to="/user/profile">
     <FaUser /> 
    </Link>
   </div>
</nav>

   <div className="searchBarBox">
<input className ="headerSearch" type="search" placeholder="Search"></input>
</div>


</header>

<div class="myDropdown">
{/* {currentRoutes} */}
</div>


</div>
    );
}

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onClick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

export default HeaderNav;