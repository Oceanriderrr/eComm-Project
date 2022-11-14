import "./HeaderNav.css"
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { BsFillPatchPlusFill } from 'react-icons/bs';



function HeaderNav(){
    return(

<div>


<header>
<nav id='cssmenu'>
<div class="logo"><a href="/">L.E.U.M.A.S </a></div>
<div id="head-mobile"></div>
<div onclick="" class="button"></div>
<ul>
<li class='active'><a href='#'>HOME</a></li>
<li><a href='/collections'>COLLECTIONS</a></li>
<li><a href='/products'>PRODUCTS</a>
   <ul>
      <li><a href='#'>Product 1</a>
         <ul>
            <li><a href='#'>Sub Product</a></li>
            <li><a href='#'>Sub Product</a></li>
         </ul>
      </li>
      <li><a href='#'>Product 2</a>
         <ul>
            <li><a href='#'>Sub Product</a></li>
            <li><a href='#'>Sub Product</a></li>
         </ul>
      </li>
   </ul>
</li>
<li><a href='/about'>ABOUT</a></li>
<li><a href='/contact'>CONTACT</a></li>
<li><a href='/swap'>SWAP</a></li>
</ul>
</nav>
</header>




<div className ="headerNavBox">




<div className="iconDiv">
    <a  href="/checkout">
     <FaShoppingCart /> 
    </a>


    <a href="/createProduct">
     <BsFillPatchPlusFill /> 
    </a>

    <a href="/user/profile">
     <FaUser /> 
    </a>
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
  window.onclick = function(event) {
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