import "./Pages.css"
import "./css/Register.css"




import "./css/details.css"

import Home from "./Home/Home"
import Login from "./Login/Login"
import Register from "./Register/Register"
import Contact from "./Contact/Contact"
import About from "./About/About"
import Products from "./Products/Products"
import ProductDetails from "./ProductDetails/ProductDetails"
import Swap from './Swap/Swap'
import PageNotFound from './PageNotFound/PageNotFound'
import MessageReceived from './MessageReceived/MessageReceived'

import Collections from './Collections/Collections'
import Collection from '../Collections/Collection'
import Collectionz from '../Collections/Collections'

//admin Pages
import CreateProduct from "./AdminPages/CreateProduct"
import EditProduct from "./AdminPages/EditProduct"


import Profile from "../Profile/Profile"
import React from "react"
import {useCookies} from 'react-cookie';
import {useState , useEffect} from 'react'
import {Route,Routes} from "react-router-dom";
// The useNavigate is used to direct to specific pages.......
import { Navigate, useNavigate} from "react-router-dom";
import {getAllProducts, userRegister, getDetails} from "../../services";
import {userLogin} from "../../services";
import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts'
import Post from '../Posts/Post'




import * as Icon from 'react-bootstrap-icons';
import Create from "../../services/createProduct"

// Swap imports

//CRUD ROUTE IMPORTS
import {createProduct} from "../../services"




function MainContent(props){
  const [cookies, setCookie, removeCookie] = useCookies(["x-auth-token"]);
	const [userId, setUserId] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
	const [loggedIn, setLoggedIn] = useState(
		cookies["x-auth-token"] ? true : false
	); 

    return(

<Routes>
    <Route path = "/" element={<Home  loggedIn={loggedIn}  />}/>

    <Route path = "/about" element={<About  loggedIn={loggedIn}  />}/>

    <Route path = "/products" element={<Products  loggedIn={loggedIn} />}/>

    <Route path = "/details/product/:id" element={<ProductDetails/>}/>


    <Route path = "/collections" element={<Collections  loggedIn={loggedIn}  />}/>


    <Route path = "/swap" element={<Swap  loggedIn={loggedIn}  />}/>


    <Route path = "/contact" element={<Contact  loggedIn={loggedIn}  />}/>
    <Route path = "/message-received" element={<MessageReceived  loggedIn={loggedIn}  />}/>

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


    <Route path = "/edit/product/:id" element={<EditProduct/>}/>


 
    </Routes>  


    );
}


export default MainContent