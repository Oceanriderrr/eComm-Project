import "./Pages.css"
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
  
  function Login(props){
    return(

        <h1>This is the Login page</h1>

    );
  }
  
  function Register(props){
    return(

        <h1>This is the Register page</h1>

    );
  }
  
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