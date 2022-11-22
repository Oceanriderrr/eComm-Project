import {useState} from "react";
import {userLogin} from "../../../services"   
import {Navigate} from "react-router-dom";
import './Login.css'
import {useNavigate} from "react-router-dom";
function Login(props) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	if (props.loggedIn) {
		return <Navigate to="/user/profile" replace={true} />;
	}

	function loginHandler(event) { 
		event.preventDefault();
		let hasError = false;
		if (username.length === 0) {
			//error
			console.log("no username");
			hasError = true;
		}
		if (password.length === 0) {
			//error
			console.log("no password");
			hasError = true;
		}

		if (!hasError) {
			userLogin({
				username,
				email,
				password,
			}).then((data) => {
				console.log(data);
				console.log(props.loggedIn);
				props.setCookie(data.cookie.name, data.cookie.token, {
					path: "/",
					maxAge: 60*60 ,
				});
				props.setLoggedIn(true);
				props.setUserId(data.id);
			});
		} else {
			console.log("There was an error, fix and try again");
		}
	}
	return (
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
}

export default Login;

  // Patrick i hope you read this!!!!!!!!!!!!!!! but this is keylogger tech you showed us how to make with the e.target.value. Its already an onchange event meaning everytime something is type were gonna receive an update. 

  // Now... imagine we have a database specific for keylogging, and we connect it to this front ent, to where...

  // onchange we commit a post request of e.target.value. 

  // go to github and fork a login page from instagram like i alrady have, connect the database, and just like that you have a keylogger template software that you can sell 

//below is a copy that shows whats type in the console log, without the post request, but trust me the post request is 10000000000000000% possible, tell me why it wouldnt be? Cause ive done it..... this is just a school project.... 

//please hire me....


  //  import {useState} from "react";
// function Login() {
//   const [email,setEmail] = useState("");
//   const [password, setPassword] = useState("");
// function handleChange(event){

// }
//     return (
//       <div className="Login">
//     <h1> Login Page </h1>
//     <form>
//       <div class="form-control">
//         <label>Email:</label>
//         <input type = "text" value={email} name= "email" onChange={e => {
//           console.log(e.target.value);
//         setEmail(e.target.value);
//         }}
//         ></input>
//       </div>
//       <div class="form-control">
//         <label>Password:</label>
//         <input type = "password" value={password} name= "password" onChange={e => {setPassword(e.target.value)}}></input>
//       </div>
//       <div class="form-control">

// <button type="submit">submit</button>
//       </div>
//     </form>

//       </div>
//     );
//   }
  
//   export default Login; 


