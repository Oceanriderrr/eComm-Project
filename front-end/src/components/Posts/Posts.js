import "./Post.css";
import { Link } from 'react-router-dom';


function Posts(props) {

console.log("These are Posts props below");
console.log(props);
  
    return (
      <div class="pageContent">
        <Link to="/create/product">Create New Product</Link>
   
      <div className="product-container">

    
      <ul className="product-grid">
    {props.children}
     </ul>
      </div>
 </div>
    );
  }
  
  export default Posts;