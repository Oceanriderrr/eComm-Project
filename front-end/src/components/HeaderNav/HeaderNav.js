import "./HeaderNav.css"
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
function HeaderNav(){
    return(
<div className ="headerNavBox">


<div className="searchBarBox">
<input className ="headerSearch" type="search" placeholder="Search"></input>
</div>



<div className="iconDiv">
    <a>
     <FaShoppingCart /> 
    </a>
</div>

  
   <div className="iconDiv">
    <a>
     <FaUser /> 
    </a>
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