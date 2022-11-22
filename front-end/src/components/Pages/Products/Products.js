import {useState,useEffect} from "react";

import {getAllProducts} from '../../../services'

import Posts from '../../Posts/Posts'
import Post from '../../Posts/Post'

function Products(props){
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
      getAllProducts()
      .then(data=>{
          data = data.reverse();
          //setPosts(data);
          console.log(data);
          data.map(item=>{
  
              return item;
          });
          setPosts(data);
      })
  },[])

  
  
    const loadPosts = posts.map((post,index)=>{
      return( <Post key={index} name = {post.name}  imageURL = {post.imageURL}  seo = {post.seo}  price = {post.price} description={`${index} -  ${post.description}`} vendor={post.vendor} productId={post.productId} collections = {post.collections} id={post._id} />)
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

  export default Products;