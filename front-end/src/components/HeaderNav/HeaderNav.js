import "./HeaderNav.css"
import { FaShoppingCart } from 'react-icons/fa';
function HeaderNav(){
    return(
<div className ="headerNavBox">
<div className ="support">
       <a>
    <FaShoppingCart />
   </a> 

        <a>
        <button  onclick="myFunction()" className = "userCircle">
           <h3 className="userInitial">I</h3>
        </button>
       </a> 
        <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
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