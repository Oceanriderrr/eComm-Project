import {useState,useEffect} from "react";
import { getUser } from "../../services";
import {Navigate} from "react-router-dom";
import Post from "../Posts/Post";

function Profile(props) {
	//fetch will happen (use effect)or in a higher component
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [postNum, setPostNum] = useState(0);
	const [posts, setPosts] = useState([]);
	//for the posts we will fetch the user's posts
	//Remove the most recent 3
	//add the posts to the page with a .map() or another dynamic building operation
	function runFetch() {
		
			getUser({
				id: props._id,
			})
		
	}
	
	useEffect(() => {
		console.log("searched");
		runFetch();
	}, []);

	// if (!props.loggedIn) {
	// 	return <Navigate to="/user/login" replace={true} />;
	// }
	const postsArray = posts.map((post,index) => {
		return (
			<Post
				key={post._id}
				index={index+1}
				description={post.description}
				creator={post.creator}
			/>
		);
	});
	return (
		<div className="Profile">
			<img src="https://via.placeholder.com/150" alt="profile" />
			<div className="personal-info">
				<p>
					<span>Username: </span>
					{username}
				</p>
				<p>
					<span>Posts: </span>
					{postNum}
				</p>
			</div>
			<div>
				<h2>Your 3 most recent Orders</h2>
				{postsArray}
			</div>
		</div>
	);
}

export default Profile;