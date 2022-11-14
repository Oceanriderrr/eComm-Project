
import './App.css';



// Import Components
import Aside from './components/Aside/Aside';
import HeaderNav from './components/HeaderNav/HeaderNav'

import Footer from './components/Footer/Footer';

import Pages from './components/Pages/Pages';
// Import Pages



// Swap routes
import React, { Component } from 'react';
import Web3 from 'web3'
function App() {
  return (
    <div className="App">
    {/* Components that belong to every page */}
  <HeaderNav />  
 <div class="content"> 


 {/* <Aside loggedIn = {true} />  */}

 <Pages />

 </div>
    <Footer />
  </div>
  );
}


export default App;
