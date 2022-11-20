
import './App.css';

import {useCookies} from 'react-cookie';
import {useState , useEffect} from 'react'

// Import Components
import Aside from './components/Aside/Aside';
import HeaderNav from './components/HeaderNav/HeaderNav'

import Footer from './components/Footer/Footer';

import Pages from './components/Pages/Pages';
// Import Pages

import{Routes, Route} from "react-router-dom"

// Swap routes
import React from 'react';
import Web3 from 'web3'
function App(props) {

  const [cookies, setCookie, removeCookie] = useCookies(["x-auth-token"]);

  const [loggedIn, setLoggedIn] = useState(cookies["x-auth-token"]?true:false);
  const [userId, setUserId] = useState("false");



  return (
    <div className="App">
    {/* Components that belong to every page */}

    
  <HeaderNav loggedIn = {true} removeCookie = {removeCookie} setLoggedIn = {setLoggedIn} setUserId = {setUserId}  />  
 <div class="content"> 


 {/* <Aside loggedIn = {false} />  */}

 <Pages />

 </div>
    <Footer />
  </div>
  );
}


export default App;
