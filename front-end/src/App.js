
import './App.css';

import {useCookies} from 'react-cookie';
import {useState , useEffect} from 'react'

// Import Components
import Aside from './components/Aside/Aside';
import HeaderNav from './components/HeaderNav/HeaderNav'
import Footer from './components/Footer/Footer';
import Pages from './components/Pages/Pages';
import "../src/components/Pages/Pages.css"
import "../src/components/Pages/css/Register.css"


import "../src/components/Pages/css/Login.css"

import "../src/components/Pages/css/details.css"

import Home from "../src/components/Pages/Home/Home"
import Login from "../src/components/Pages/Login/Login"
import Register from "../src/components/Pages/Register/Register"
import Contact from "../src/components/Pages/Contact/Contact"
import About from "../src/components/Pages/About/About"
import Products from "../src/components/Pages/Products/Products"
import ProductDetails from "../src/components/Pages/ProductDetails/ProductDetails"
import Swap from "../src/components/Pages/Swap/Swap"
import PageNotFound from "../src/components/Pages/PageNotFound/PageNotFound"

import Collections from '../src/components/Pages/Collections/Collections'


//admin Pages
import CreateProduct from "../src/components/Pages/AdminPages/CreateProduct"
import EditProduct from "../src/components/Pages/AdminPages/EditProduct"


import Profile from "../src/components/Pages/Profile/Profile"
import React from "react"


import {Route,Routes} from "react-router-dom";
// The useNavigate is used to direct to specific pages.......




// Swap routes

import Web3 from 'web3'
function App(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["x-auth-token"]);
	const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
	const [loggedIn, setLoggedIn] = useState(
		cookies["x-auth-token"] ? true : false
	);
  const [id,setId] = useState("")


	console.log(loggedIn);
  console.log("above says if we are logged in or not")
	console.log(userId);
  console.log("above is userID");
  return (
    <div className="App">
    {/* Components that belong to every page */}

    
  <HeaderNav loggedIn = {loggedIn} removeCookie = {removeCookie} setLoggedIn = {setLoggedIn} setUserId = {setUserId}  />  
 <div class="content"> 


 {/* <Aside loggedIn = {false} />  */}

 <Routes>
    <Route path = "/" element={<Home  loggedIn={loggedIn}  />}/>

    <Route path = "/about" element={<About  loggedIn={loggedIn}  />}/>

    <Route path = "/products" element={<Products  loggedIn={loggedIn} />}/>

    <Route path = "details/product/:id" element={<ProductDetails id={id} userId={userId} />}/>
{/* <Route exact path ="/product/:id"  component={<ProductDetails/>} /> */}

    <Route path = "/collections" element={<Collections  loggedIn={loggedIn}  />}/>


    <Route path = "/swap" element={<Swap  loggedIn={loggedIn}  />}/>


    <Route path = "/contact" element={<Contact  loggedIn={loggedIn}  />}/>


    <Route path = "/user/login" element={<Login 
    loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
								setCookie={setCookie}
								setUserId={setUserId}/>}/>


    <Route path = "/user/register" element={<Register loggedIn={loggedIn} />}/>
					<Route
						path="/user/profile"
						element={<Profile loggedIn={loggedIn} userId={userId} />}
					/>



    <Route path = "*" element={<PageNotFound/>}/>


    <Route path = "/create/product" element={<CreateProduct/>}/>


    <Route path = "/edit/product/:id" element={<EditProduct    loggedIn={loggedIn}  productId={productId} />}/>


 
    </Routes>  

 </div>
    <Footer />
  </div>
  );
}


export default App;
