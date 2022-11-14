import {Link} from 'react-router-dom';

import "./Aside.css"
import React from 'react';
import * as Icon from 'react-bootstrap-icons';


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
            <Icon.List color="white" />
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
 <Icon.ArrowRight color="white" />
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
    <div  id= "aside-Menu" className='asideMenu'>
    
    <nav className="main-menu">
        <ul>
        {currentRoutes}

        </ul>
 
    </nav>

  
    </div>
    );
  }



  
  export default Aside;