import {Link} from 'react-router-dom';

import "./Aside.css"

function Aside(props) {

    let loggedIn = props.loggedIn;
    let currentRoutes = [];
  
    if(loggedIn){
        currentRoutes = [ 
            <li>
            <a href="/">
                <i className="fa fa-home fa-2x nav-icon"></i>
                <span className="nav-text">
                    Home
                </span>
            </a>
        </li>,

        <li className="has-subnav">
            <a href="/swap">
                <i className="fa fa-brands fa-ethereum fa-2x nav-icon"></i>
                <span className="nav-text">
                    Swap
                </span>
            </a>  
        </li>,
      
        <li className="has-subnav">
            <a href="/products">
               <i className="fa fa-tag fa-2x nav-icon"></i>
                <span className="nav-text">
                    Products
                </span>
            </a>
        </li>,

        <li className="has-subnav">
            <a href="/collections">
               <i className="fa fa-folder-open fa-2x nav-icon"></i>
                <span className="nav-text">
                    Collections
                </span>
            </a>
        </li>,

        <li>
            <a href="/contact">
                <i className="fa fa-bar-chart-o fa-2x nav-icon"></i>
                <span className="nav-text">
                    Contact
                </span>
            </a>
        </li>,

        <li>
            <a href="/about">
                <i className="fa fa-font fa-2x nav-icon"></i>
                <span className="nav-text">
                   About Us
                </span>
            </a>
        </li>,







    ]
    } else {
        currentRoutes = [
        <li>
            <a href="/login">
                  <i className="fa fa-power-off fa-2x"></i>
                 <span className="nav-text">
                     Login
                 </span>
             </a>
         </li>, 

         <li>
           <a href="/register">
                 <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">
                    Register
                </span>
            </a>
        </li> 
        
    ]
      }
    return (
    <div className='asideMenu'>
    
    <nav className="main-menu">
        <ul>
        {currentRoutes}

        </ul>
 
    </nav>

    <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
  <path
        class="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
  <path
        class="line middle"
        d="m 30,50 h 40" />
  <path
        class="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
</svg>
    </div>
    );
  }
  
  export default Aside;