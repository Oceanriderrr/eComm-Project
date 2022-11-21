import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./HeaderNav.css"
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { BsFillPatchPlusFill } from 'react-icons/bs';




  

 
 // Close the dropdown menu if the user clicks outside of it
//  window.onClick = function(event) {
//    if (!event.target.matches('.dropbtn')) {
//      var dropdowns = document.getElementsByClassName("dropdown-content");
//      var i;
//      for (i = 0; i < dropdowns.length; i++) {
//        var openDropdown = dropdowns[i];
//        if (openDropdown.classList.contains('show')) {
//          openDropdown.classList.remove('show');
//        }
//      }
//    }
//  }

function HeaderNav(props){
     let loggedIn = props.loggedIn;

   let isAdmin = props.isAdmin; 
   
   let currentIcons = [];

    let currentRoutes = [];

   const handleToggle = () => {
   setNavbarOpen(!navbarOpen)
 }
const [navbarOpen, setNavbarOpen] = useState(false)
   // THIS WILL BE RENDERING PAGES PER COOKIE LOGIN.......................
console.log(props);

console.log("below is if we are logged In or not");
console.log(props.loggedIn);

function clickHandler(event){
  console.log("clicked");
 props.setLoggedIn(false);
 props.removeCookie("x-auth-token",{path:'/'});
  console.log(window.location);

 
}
  

    //Logged in as admin
    if(loggedIn){
    
      currentRoutes = [ 

<li>
<Link to="/swap">
SWAP
</Link>
</li>, 

<li>
<Link to="/create/product">
CREATE
</Link>
</li>, 

         <li onClick = {clickHandler} class="active">
         <Link to="/user/login">
         Logout
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
<div  onClick={handleToggle} id="dropdown" class="button">{navbarOpen}</div>
<ul>    
<li>
            <Link to="/">
               Home
            </Link>
   </li> 
  <li>
            <Link to="/collections">
               Collections
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
               About
            </Link>
         </li>

        <li>
            <Link to="/contact">
               Contact
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

<nav className="navBar">
    <button>{navbarOpen}</button>
    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
    <li>
            <Link to="/">
               Home
            </Link>
   </li> 
  <li>
            <Link to="/collections">
               Collections
            </Link>
   </li>
   
   <li><Link to='/products'>Products</Link>
         </li>
<li>
            <Link to='/about'>
               About
            </Link>
         </li>

        <li>
            <Link to="/contact">
               Contact
            </Link>
        </li>
{currentRoutes}
    </ul>
  </nav>


</div>
    );
}



export default HeaderNav;