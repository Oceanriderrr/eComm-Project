import "./Post.css";

function Posts(props) {
    return (

      <div className="product-container">

    
      <ul className="product-grid">
    {props.children}
     </ul>
      </div>

    );
  }
  
  export default Posts;