import {useState,useEffect} from "react";

import {getAllProducts, getUser } from '../../../services'

import {Navigate} from "react-router-dom";
import './Profile.css'
import Post from "../../Posts/Post";

function Profile(props){
	const [username, setUsername] = useState("");
	const [postNum, setPostNum] = useState(0);
	const [posts, setPosts] = useState([]);


	console.log("below is the profile props");
	console.log(props)
    function runFetch() {
		getAllProducts({
			id: props.userId,
		}).then((data) => {
			console.log(data);
			getUser({
				
				id: props.userId,
			}).then((user) => {
				console.log("below is getUser Data on Profile page")
				console.log(data);
				setPostNum(data.length);
				setUsername(user.username);
				data = data.reverse().slice(0, 3);
				data = data.map(item=>{
					// item.author = user.username;
					return item;
				});
				console.log("below is the Profile DATA")
				console.log(data);
				let newData = JSON.stringify(data);
				let oldData = JSON.stringify(posts);
				if (oldData !== newData) {
					setPosts(data);
				}
			});
		});
	}
	
	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);

	if (!props.loggedIn) {
		return <Navigate to="/user/login" replace={true} />;
	}
	const ordersArray = posts.map((order,index) => {
		return (
			<Post
				key={order._id}
				index={index+1}
                name={order.name}
				price={order.price}
				date={order.date}
			/>
		);
	});

      return(
    
    <div className="pageContent">      
<div className="Profile">
			<img class="profile-icon" src="https://freesvg.org/img/abstract-user-flat-4.png" height={"150px"} alt="profile" />
			<div className="personal-info">
				<p>
					<span>UserID: </span>
        {props.userId}
				</p>
	
			</div>
			<div class="ordersDiv">
				<h2>Your Most Recent Orders</h2>
				{ordersArray}
			</div>
		</div>
    </div>
    
    
      );
  }

  export default Profile;