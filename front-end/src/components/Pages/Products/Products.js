import {useState,useEffect} from "react";

import {getAllProducts} from '../../../services'
import { Link } from 'react-router-dom';
import Posts from '../../Posts/Posts'
import Post from '../../Posts/Post'

function Products(props){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
      getAllProducts()
      .then(data=>{
          data = data.reverse();
          //setPosts(data);
          console.log(data);
          data.map(item=>{
  
              return item;
          });
          setProducts(data);
      })
  },[])

  const deleteProduct = (item) =>{
    console.warn(item._id)
  }

  const getProducts = async ()=>{
    let result = await fetch('https://localhost:5000/api/product')
    result= await result.json;
    setProducts(result);
  }
    const loadPosts = products.map((post,index)=>{
      return( <Post key={index} name = {post.name}  imageURL = {post.imageURL}  seo = {post.seo}  price = {post.price} description={`${index} -  ${post.description}`} vendor={post.vendor} productId={post.productId} collections = {post.collections} id={post._id} />)
    })
  
  
  
  
      return(
    
    // <div className="pageContent">      
    // <div className="Main">

    // <Posts>
    //   {loadPosts}
    // </Posts>
    // </div>
    // </div>
    
    <div class="pageContent">
    
     <Link to="/create/product">Create New Product</Link>
{
  products.map((item,index)=>
  
<div class="product-item-div">

<li class="product-card">
     <Link to={`/details/product/${item._id}`}> <img class="card__image" alt={item.seo} src={item.imageURL} />
        <div class="product-card__text">
          {item.name}
        </div>
        <div class="product-card__price">${item.price}</div>
        
      
</Link> 
      <div class="buttons">
 <button class="addToCart" href="/add/cart/:productId">Add to Cart</button>

      </div>
    </li>
     
</div>
  
  )}
    </div>
    
      );
  }

  export default Products;