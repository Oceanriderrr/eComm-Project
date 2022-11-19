import "./Pages.css"
import "./css/Register.css"
import "./css/Swap.css"
import "./css/Home.css"
import "./css/Login.css"
import "./css/Contact.css"

import React from "react"
import {useCookies} from 'react-cookie';
import {useState , useEffect} from 'react'
import {Route,Routes} from "react-router-dom";
// The useNavigate is used to direct to specific pages.......
import {useNavigate} from "react-router-dom";
import {userRegister} from "../../services";
import {userLogin} from "../../services";

import Posts from '../Posts/Posts'
import Post from '../Posts/Post'

import Collection from '../Collections/Collection'
import Collectionz from '../Collections/Collections'


import * as Icon from 'react-bootstrap-icons';

// Swap imports






function MainContent(props){
  const [cookies, setCookie, removeCookie] = useCookies(["x-auth-token"]);
	const [userId, setUserId] = useState("");
	const [loggedIn, setLoggedIn] = useState(
		cookies["x-auth-token"] ? true : false
	); 

    return(

<Routes>
    <Route path = "/" element={<Home/>}/>

    <Route path = "/about" element={<About/>}/>

    <Route path = "/products" element={<Products/>}/>

    <Route path = "/details/product/:productId" element={<ProductDetails/>}/>


    <Route path = "/collections" element={<Collections/>}/>


    <Route path = "/swap" element={<Swap/>}/>


    <Route path = "/contact" element={<Contact/>}/>


    <Route path = "/user/login" element={<Login 								loggedIn={loggedIn}
								setLoggedIn={setLoggedIn}
								setCookie={setCookie}
								setUserId={setUserId}/>}/>


    <Route path = "/user/register" element={<Register loggedIn={loggedIn} />}/>


    <Route path = "/faq" element={<FAQ/>}/>


    <Route path = "/documentation" element={<Documentation/>}/>


    <Route path = "/404" element={<PageNotFound/>}/>


    <Route path = "/newPage" element={<NewPage/>}/>


    <Route path = "/createProduct" element={<CreateProduct/>}/>


    <Route path = "/editProduct" element={<EditProduct/>}/>


    <Route path = "/deleteProduct" element={<DeleteProduct />}/>

 
    </Routes>  





    );
}


function Home(props) {
<div className="pageContent">
<h4>
 HomePageContent 
</h4>


</div>

  }
  
  function About(props) {
    return(
  
  <div className="pageContent">
    <h1>About our shop</h1>

    <img src="https://via.placeholder.com/500x200"></img>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam magnam similique tempora veniam vero expedita obcaecati at temporibus corrupti, pariatur et totam? Dolor delectus dolorem sapiente, assumenda ex harum.</p>
  </div>
     

  
    );
  }
  
  function Products(props){
    const posts = [
      {productName:"Product 1",
      imageURL : "https://via.placeholder.com /150" ,
      seo:["tag1","tag2","tag3"],
      description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
      price:23.05,
      vendor:"Leumas",
      productId:1,
      collections:["collection1","collection2","collection3"],

    }, 
  
      {productName:"Product 2",
      imageURL : "https://placeholder.com/150x150" ,
      seo:["tag1","tag2","tag3"],
      description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
      price:19.95,
      vendor:"Leumas",
      collections:["collection1","collection2","collection3"]
    },
  
      {productName:"Product 3",
      imageURL : "https://placeholder.com/150x150" ,
      seo:["tag1","tag2","tag3"],
      description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
      price:23,
      vendor:"Leumas",
      collections:["collection1","collection2","collection3"]
    },
  
      {productName:"Product 4",
      imageURL : "https://placeholder.com/150x150" ,
      seo:["tag1","tag2","tag3"],
      description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
      price:4300,
      vendor:"Leumas",
      collections:["collection1","collection2","collection3"]
    },
    {productName:"Product 4",
    imageURL : "https://placeholder.com/150x150" ,
    seo:["tag1","tag2","tag3"],
    description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
    price:4300,
    vendor:"Leumas",
    collections:["collection1","collection2","collection3"]
  },
  {productName:"Product 4",
  imageURL : "https://placeholder.com/150x150" ,
  seo:["tag1","tag2","tag3"],
  description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
  price:4300,
  vendor:"Leumas",
  collections:["collection1","collection2","collection3"]
},
{productName:"Product 4",
imageURL : "https://placeholder.com/150x150" ,
seo:["tag1","tag2","tag3"],
description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
price:4300,
vendor:"Leumas",
collections:["collection1","collection2","collection3"]
},
{productName:"Product 4",
imageURL : "https://placeholder.com/150x150" ,
seo:["tag1","tag2","tag3"],
description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
price:4300,
vendor:"Leumas",
collections:["collection1","collection2","collection3"]
},
{productName:"Product 4",
imageURL : "https://placeholder.com/150x150" ,
seo:["tag1","tag2","tag3"],
description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
price:4300,
vendor:"Leumas",
collections:["collection1","collection2","collection3"]
},
{productName:"Product 4",
imageURL : "https://placeholder.com/150x150" ,
seo:["tag1","tag2","tag3"],
description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
price:4300,
vendor:"Leumas",
collections:["collection1","collection2","collection3"]
},
{productName:"Product 4",
imageURL : "https://placeholder.com/150x150" ,
seo:["tag1","tag2","tag3"],
description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
price:4300,
vendor:"Leumas",
collections:["collection1","collection2","collection3"]
},
{productName:"Product 4",
imageURL : "https://placeholder.com/150x150" ,
seo:["tag1","tag2","tag3"],
description:"lorem ipsum dolor sit amet consecector adipscing elit na arak keboura nyebiyeb nehmeed ketral",
price:4300,
vendor:"Leumas",
collections:["collection1","collection2","collection3"]
},
      
    ]
  
  
    const loadPosts = posts.map((post,index)=>{
      return( <Post key={index} productName = {post.productName}  imageURL = {post.imageURL}  seo = {post.seo}  price = {post.price} description={`${index} -  ${post.description}`} vendor={post.vendor} productId={post.productId} collections = {post.collections} />)
    })
  
  
  
      return(
    
    <div className="pageContent">      
    <div className="Main">

    <Posts>
      {loadPosts}
    </Posts>
    </div>
    </div>
    
    
      );
  }
    function Collections(props) {
const posts = [
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },
  {
    collectionName: "Hacker Tech",
    collectionDescription:"test description 1",
    relatedProducts:[]
  },

]
      const loadPosts = posts.map((post,index)=>{
        return( <Collection key={index} collectionName = {post.collectionName} collectionDescription = {post.collectionDescription} relatedProducts = {post.relatedProducts} />)
      })

    return(
<div className="pageContent">

<Collectionz>

{loadPosts}
</Collectionz>


</div>


  
    );
  }
  function ProductDetails(props) {
    return(
      <div class = "productDetailsPage">
        <h1>{props.productName}</h1>
        <div>
          <img src={props.imageURL} alt="product image"></img>
          <p>{props.seo}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>{props.description}</p>
        </div>
        <div>
          <h3>Specification</h3>
          <ul>
            <li>Template</li>
            <li>Three</li>
            <li>or Four</li>
            <li>specifications</li>
          </ul>
        </div>
        <div>
          Space for cutomer reviews 
        </div>
        <div>
          <h3>Price: {props.price}</h3>
          <btn>ADD TO CART</btn>
        </div>
      
        
      </div>
     );
  }
  

  
  
  function Swap(props){
    return(
<div class ="pageContent">



   

<div >

<button id = "login_button" className="btn btn-outline-primary my-2 my-sm-0" type="submit">Sign in with MetaMask</button>

        <div class="row">
            <div  id="window">
                <h4>Swap</h4>
                <div id="form">
                    <div class="swapbox">
                        <div class="swapbox_select token_select" id="from_token_select">
                        SELECT A TOKEN
                            <img class="token_img" id="from_token_img"></img>
                            <span id="from_token_text"></span>
                        </div>
                        <div class="swapbox_select">
                            <input class="number form-control" placeholder="amount" id="from_amount"></input>
                        </div>
                    </div>
                    <div class="swapbox">
                        <div class="swapbox_select token_select" id="to_token_select">
                        SELECT A TOKEN
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
    <div class="modal" id="token_modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Select a Token</h5>
            <button id="modal_close" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="token_list"></div>
          </div>
        </div>
      </div>
    </div>


</div>
    );
  }
  
  function Contact(props){
    return(
{/* <form class="cf">
  <div class="half left cf">
    <input type="text" id="input-name" placeholder="Name"></input>
    <input type="email" id="input-email" placeholder="Email address"></input>
    <input type="text" id="input-subject" placeholder="Subject"></input>
  </div>
  <div class="half right cf">
    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
  </div>  
  <input type="submit" value="Submit" id="input-submit"></input>
</form> */},

<div class="pageContent">  
<section class="contact-page-sec">
    <div class="containers">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-map-marked"></i>
              </div>
              <div class="contact-info-text">
                <h2>address</h2>
                <span>1215 Lorem Ipsum, Ch 176080 </span> 
                <span>Chandigarh , INDIA</span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h2>E-mail</h2>
                <span>info@LoremIpsum.com</span> 
                <span>yourmail@gmail.com</span>
              </div>
            </div>            
          </div>                
        </div>                
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="contact-info-text">
                <h2>office time</h2>
                <span>Mon - Thu  9:00 am - 4.00 pm</span>
                <span>Thu - Mon  10.00 pm - 5.00 pm</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <form action="contact-mail.php" method="post">
              <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>                              
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div class="col-md-12 message-input">
                <div class="single-input-field">
                  <textarea  placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div class="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
            </form>   
          </div>      
        </div>
        <div class="col-md-4">        
          <div class="contact-page-map">

          </div>          
        </div>        
      </div>
    </div>
  </section>
</div>
);
  }

  // Login Page ......................................................................
  
  //TODO....AFTER LOGIN A LOG OUT BUTTON NEEDS RENDERED.....
  // TODO ADD IN THE LOGIN SERVICE

  function Login(props){

    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
 
    function loginHandler(event){
      let hasError = false;
      event.preventDefault();
      if(username.length === 0){
         let hasError = true;
          alert("Username Required!");
      }
      if(password.length === 0){
         let hasError = true;
          alert("Password Required!");
      }
      if(!hasError){
        userLogin({
              username,
              password
          }).then((data)=>{
              console.log(data);
   
              return navigate("/collections");
          })
      }else{
          console.log("there was an error, fix and try again!!")
      }
    }


  return(
    
      
        
      <div className="pageContent">
        <div className="login-box">
          <h1><b>LOGIN</b></h1>
            <form onSubmit={loginHandler}>
                <div className="user-box">
                    <label for="userName"><i><b>User Name:</b></i></label>
                    <br></br>
                    <input type = "text" value={username} name= "username" onChange={(e) => {
                      // console.log(e.target.value);
                    setUsername(e.target.value);}}>
                    </input>
                </div>
                <div className="user-box">
                    <label for="password"><i><b>Password:</b></i></label>
                    <br></br>
                    <input type = "password" value={password} name= "password" onChange={(e) => {
                      // console.log(e.target.value);
                    setPassword(e.target.value)
                    }}></input>
                </div>
                <br></br>
                <div className="login">
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
      </div>              
  );
};

// Login Page ......................................................................

// Registration Page................................................................

  // TODO....REDIRECT USER TO LOGIN PAGE AFTER REGISTRATION.....


  function Register(props){

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    function submitHandler(event){
      let hasError = false;
      event.preventDefault();
      if(username.length === 0){
         let hasError = true;
          alert("ASdd username");
      }
      if(email.length === 0){
        let hasError = true;
         alert("Add email");
     }
      if(password.length === 0){
         let hasError = true;
          alert("Add password");
      }
      if(password !== confirmPassword){
         let hasError = true;
          alert("Password does not match");
      }
      if(!hasError){
        userRegister({
              username,
              email,
              password,
              confirmPassword
          }).then((data)=>{
              console.log(data);
              if(data.id){
                return navigate("/user/login");
              }else{
                console.log("User Creation was not successful");
              }
          })
      }else{
          console.log("there was an error, fix and try again!!")
      }
    }
    // if(props.loggedIn){
    //     return navigate("/");
      // }
  
    return(
    
      <div className="pageContent">
        <div className="login-box">
          <h1><b>REGISTER</b></h1>
          <form onSubmit={submitHandler}> 
            <div className="user-box">
              <input type="text"  value={username} name="username" onChange={(e) => {
                            // console.log(e.target.value);
                          setUsername(e.target.value);
                          }}></input>
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="text" value={email} name="email" onChange={(e) => {
                            // console.log(e.target.value);
                          setEmail(e.target.value);
                          }}></input>
              <label>Email</label>
            </div>
  
            <div className="user-box">
              <input type="password" value={password} name="password" onChange={(e) => {
                            // console.log(e.target.value);
                          setPassword(e.target.value);
                          }}></input>
              <label>Password</label>
            </div>
  
            <div className="user-box">
              <input type="password" value={confirmPassword} name="confirmPassword" onChange={(e) => {
                            // console.log(e.target.value);
                            setConfirmPassword(e.target.value);
                          }}></input>
              <label>Re-Password</label>
            </div>
            <div>
            <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
  
    );
  }
// Registration Page................................................................

  function FAQ(props){
    return(

        <h1>Question</h1>
   

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

  // create product page ...............
  function CreateProduct(){
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [vendor, setVendor] = useState("");
    const [seo, setSEO] = useState("");



    return(
      <div>
      <div className="heading">
      <h1><b>Create New Product</b></h1>
      </div>
      <div className="form-body">
            <div className="">
                <label className="form__label" for="productName"><i><b>Product Name:</b></i></label>
                <br></br>
        <input type = "text" value={productName} name= "email" onChange={e => {
        console.log(e.target.value);
        setProductName(e.target.value);
        }}></input>
            </div>

            <div className="">
                <label className="form__label" for="price"><i><b>Price:</b></i></label>
                <br></br>
                <input type = "text" value={price} name= "email" onChange={e => {
          console.log(e.target.value);
        setPrice(e.target.value);
        }}></input>
            </div>


            <div className="">
                <label className="form__label" for="productDescription"><i><b>Description:</b></i></label>
                <br></br>
                <input type = "text" value={description} name= "email" onChange={e => {
          console.log(e.target.value);
        setDescription(e.target.value);
        }}></input>
            </div>


            <div className="">
                <label className="form__label" for="vendor"><i><b>Vendor:</b></i></label>
                <br></br>
                <input type = "text" value={vendor} name= "email" onChange={e => {
          console.log(e.target.value);
        setVendor(e.target.value);
        }}></input>
            </div>

            <div className="">
                <label className="form__label" for="seo"><i><b>SEO rank:</b></i></label>
                <br></br>
                <input type = "text" value={seo} name= "email" onChange={e => {
          console.log(e.target.value);
        setSEO(e.target.value);
        }}></input>
            </div>
            
            <div className="">
                <label className="form__label" for="ImageURL"><i><b>ImageURL:</b></i></label>
                <br></br>
                <input type = "text" value={imageURL} name= "email" onChange={e => {
          console.log(e.target.value);
        setImageURL(e.target.value);
        }}></input>
            </div>
            
            <br></br>
            <div className="register">
            <button type="submit" class="btn">Register Product</button>
            </div>
        </div>
</div>

    );
  }
  // edit product page ...............
  function EditProduct(props){
    return(
      <h1>This is our admin only edit product page</h1>
    );
  }
  // create product page ...............
  function DeleteProduct(props){
    return(
      <h1>This is our admin only delete product page</h1>
    );
  }




  function collectionHover(){
    document.getElementById("collection-cards").onmousemove = e => {
      for(const card of document.getElementsByClassName("collection-cards")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
    }
  }
export default MainContent