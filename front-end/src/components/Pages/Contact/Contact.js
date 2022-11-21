
import './Contact.css'

import {  useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { ContactForm } from "../../../services";

function Contact(props){

    
		const navigate = useNavigate();
		const [name, setName] = useState("");
		const [phone, setPhone] = useState("");
		const [subject, setSubject] = useState("");
		const [message, setMessage] = useState("");
	  
		function submitHandler(event){
		  let hasError = false;
		  event.preventDefault();
		  if(name.length === 0){
			 let hasError = true;
			  alert("ASdd username");
		  }
		  if(phone.length === 0){
			let hasError = true;
			 alert("Add email");
		 }
		  if(subject.length === 0){
			 let hasError = true;
			  alert("Add password");
		  }

		  if(!hasError){
			ContactForm({
				  name,
				  phone,
				  subject,
				  message
			  }).then((data)=>{
	
				  if(data.id){
                    alert('Message Sent Redirecting you');
                    DelayNode(200);
					return navigate("/contact/message-received");
				  }else{
					console.log("Message Not Sent");
                    alert('Message did not send');
				  }
			  })
		  }else{
			  console.log("there was an error, fix and try again!!")
		  }
		}
    return(


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
                <span>KINGSLAND UNIVERSITY</span> 
                <span>Somewhere in the U.S</span> 
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
                <span>MRW PROJECT TEMPLATE</span> 
                <span>wbermudez@xlabz.tech</span>
                <span>ask for michaels email</span>
                <span>ask for ryans email</span>
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
                <span>We are here</span>
                <span>We are ready..... 24/7 no breaktime</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <form onSubmit={submitHandler}>
              <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Your Name" value ={name} name="name" onChange={(e) => {
								console.log(e.target.value);
							  setName(e.target.value);
							  }}/>
                </div>
              </div>  
                             
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Phone Number" value ={phone}  name="phone" onChange={(e) => {
								console.log(e.target.value);
							  setPhone(e.target.value);
							  }}/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Subject"  value ={subject}  name="subject" onChange={(e) => {
								console.log(e.target.value);
							  setSubject(e.target.value);
							  }}/>
                </div>
              </div>                
              <div class="col-md-12 message-input">
                <div class="single-input-field">
                  <textarea  placeholder="Write Your Message"  value ={message} name="message" onChange={(e) => {
								console.log(e.target.value);
							  setMessage(e.target.value);
							  }}></textarea>
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

  export default Contact;