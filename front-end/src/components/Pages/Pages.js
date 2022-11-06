import "./Pages.css"
import "./css/Register.css"
import "./css/Swap.css"
import {Route,Routes} from "react-router-dom";

function MainContent(){
    return(

<Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/about" element={<About/>}/>
    <Route path = "/products" element={<Products/>}/>
    <Route path = "/collections" element={<Collections/>}/>
    <Route path = "/swap" element={<Swap/>}/>
    <Route path = "/contact" element={<Contact/>}/>
    <Route path = "/login" element={<Login/>}/>
    <Route path = "/register" element={<Register/>}/>
    <Route path = "/faq" element={<FAQ/>}/>
    <Route path = "/documentation" element={<Documentation/>}/>
    <Route path = "/404" element={<PageNotFound/>}/>
    <Route path = "/newPage" element={<NewPage/>}/>
    </Routes>  

    );
}
function Home(props) {
    return(
  
  <h1>This is the Home page</h1>
  
  
    );
  }
  
  function About(props) {
    return(
  
  <h1>This is the about page</h1>

  
    );
  }
  
  
  function Products(props) {
    return(

<h1>anything we put here renders products page</h1>

    );
  }
  
  function Collections(props) {
    return(

  <h1>This is the Collections page</h1>

  
    );
  }
  
  
  function Swap(props){
    return(

      


      <div >
<div className="swapwindow"> 
      <li class="nav-item">
            <button id="login_button" class="btn btn-outline-primary my-2 my-sm-0" type="submit">Sign in with MetaMask</button>
          </li>
             <div class ="container">
        <div class="row">
            <div class="col col-md-6 offset-md-3" id="window">
                <h4>Swap</h4>
                <div id="form">
                    <div class="swapbox">
                        <div class="swapbox_select token_select" id="from_token_select">
                            <img class="token_img" id="from_token_img"></img>
                            <span id="from_token_text"></span>
                        </div>
                        <div class="swapbox_select">
                            <input class="number form-control" placeholder="amount" id="from_amount"></input>
                        </div>
                    </div>
                    <div class="swapbox">
                        <div class="swapbox_select token_select" id="to_token_select">
                            <img class="token_img" id="to_token_img"></img>
                            <span id="to_token_text"></span>
                        </div>
                         <div class="swapbox_select">
                            <input class="number form-control" placeholder="amount" id="to_amount"></input>
                        </div>
                    </div>  
                    <div class="gas_estimate_label">Estimated Gas: <span id="gas_estimate"></span></div>
                    <button disabled class="btn btn-large btn-primary btn-block" id="swap_button">Swap</button>                
                </div>
            </div>
        </div>
    </div>
      </div>
    </div>
    );
  }
  
  function Contact(props){
    return(

        <h1>This is the Contact page</h1>

    );
  }

  // Login Page ......................................................................
  
  //TODO....AFTER LOGIN A LOG OUT BUTTON NEEDS RENDERED.....


  function Login(props){
    return(
      <div>
        <div className="heading">
        <h1><b>LOGIN </b></h1>
        </div>
            <div className="form-body">
                <div className="userName">
                    <label className="form__label" for="userName"><i><b>User Name:</b></i></label>
                    <br></br>
                    <input  type="text" name="" id="userName"  className="form__input"placeholder="User Name" required/>
                </div>
                <div className="password">
                    <label className="form__label" for="password"><i><b>Password:</b></i></label>
                    <br></br>
                    <input className="form__input" type="password"  id="password" placeholder="Password" required/>
                </div>
                <br></br>
                <div class="login">
              <button type="submit" class="btn">Login</button>
                </div>
            </div>
      </div>
    );
  }

  // Login Page ......................................................................

  // Registration Page................................................................

    // TODO....RENDER USER TO LOGIN PAGE AFTER REGISTRATION.....


  function Register(props){
    return(
    
  <div>
        <div className="heading">
        <h1><b>REGISTER HERE</b></h1>
        </div>
        <div className="form-body">
              <div className="userName">
                  <label className="form__label" for="userName"><i><b>User Name:</b></i></label>
                  <br></br>
                  <input  type="text" name="" id="userName"  className="form__input"placeholder="User Name" required/>
              </div>
              <div className="email">
                  <label className="form__label" for="email"><i><b>Email:</b></i></label>
                  <br></br>
                  <input  type="email" id="email" className="form__input" placeholder="Email" required/>
              </div>
              <div className="password">
                  <label className="form__label" for="password"><i><b>Password:</b></i></label>
                  <br></br>
                  <input className="form__input" type="password"  id="password" placeholder="Password" required/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword"><i><b>Confirm Password:</b></i></label>
                  <br></br>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" required/>
              </div>
              <br></br>
              <div class="register">
              <button type="submit" class="btn">Register</button>
              </div>
          </div>
  </div>

    );
  }
  // Registration Page................................................................

  function FAQ(props){
    return(

        <h1>This is the faq page</h1>

    );
  }
  
  function Documentation(props){
    return(
   
        <h1>This is the Documentation page</h1>

    );
  }
  
  function PageNotFound(props){
    return(

        <h1>Error 404 page not found please navigate to <a href='/'>Home</a></h1>

    );
  }
  function NewPage(props){
    return(
 
      <h1>This is the new page page</h1>

    );
  }
export default MainContent