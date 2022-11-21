import {useState,useEffect} from "react";

import {getAllProducts, getUser } from '../../../services'

import {Navigate} from "react-router-dom";

import Post from "../../Posts/Post";

function Profile(props){
	const [username, setUsername] = useState("");
	const [postNum, setPostNum] = useState(0);
	const [posts, setPosts] = useState([]);

    function runFetch() {
		getAllProducts({
			id: props.userId,
		}).then((data) => {
			console.log(data);
			getUser({
				id: props.userId,
			}).then((user) => {
				console.log(data);
				setPostNum(data.length);
				setUsername(user.username);
				data = data.reverse().slice(0, 3);
				data = data.map(item=>{
					item.author = user.username;
					return item;
				});

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
			<img src="https://via.placeholder.com/150" alt="profile" />
			<div className="personal-info">
				<p>
					<span>Username: </span>
        {props.username}
				</p>
				<p>
					<span>Posts: </span>
				
				</p>
			</div>
			<div>
				<h2>Your Most Recent Orders</h2>
				{ordersArray}
			</div>
		</div>
    </div>
    
    
      );
  }

  export default Profile;