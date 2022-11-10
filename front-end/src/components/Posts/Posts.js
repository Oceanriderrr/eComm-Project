import "./Post.css";

function Posts(props) {
    return (

      <div className="container">

    
      <ul className="grid">
    {props.children}
     </ul>
      </div>

    );
  }
  
  export default Posts;