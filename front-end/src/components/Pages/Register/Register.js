import {  useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { userRegister } from "../../../services";
//todd: add in the Register service

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


export default Register;