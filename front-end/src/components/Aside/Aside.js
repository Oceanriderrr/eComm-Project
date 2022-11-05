

import "./Aside.css"

function Aside() {
    return (
      <div className='asideMenu'>
    
      <nav className="main-menu">
            <ul>
                <li>
                    <a href="/">
                        <i className="fa fa-home fa-2x nav-icon"></i>
                        <span className="nav-text">
                            Home
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a href="/swap">
                        <i className="fa fa-trade fa-2x nav-icon"></i>
                        <span className="nav-text">
                            Swap
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="/products">
                       <i className="fa fa-list fa-2x nav-icon"></i>
                        <span className="nav-text">
                            Products
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="/collections">
                       <i className="fa fa-folder-open fa-2x nav-icon"></i>
                        <span className="nav-text">
                            Collections
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="/contact">
                        <i className="fa fa-bar-chart-o fa-2x nav-icon"></i>
                        <span className="nav-text">
                            Contact
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/about">
                        <i className="fa fa-font fa-2x nav-icon"></i>
                        <span className="nav-text">
                           About Us
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/faq">
                       <i className="fa fa-table fa-2x nav-icon"></i>
                        <span className="nav-text">
                            FAQ
                        </span>
                    </a>
                </li>

                <li>
                    <a href="/documentation">
                       <i className="fa fa-info fa-2x nav-icon"></i>
                        <span className="nav-text">
                            Documentation
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/login">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Login
                        </span>
                    </a>
                </li> 

                <li>
                   <a href="/register">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Register
                        </span>
                    </a>
                </li> 
            </ul>

            
         
        </nav>

            </div>
    );
  }
  
  export default Aside;