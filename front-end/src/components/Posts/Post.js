import "./Post.css";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../services";

import { Link } from 'react-router-dom';
function Post(props) {
console.log(props);
console.log("above is props")

    return (

<div class="product-item-div">

<li class="product-card">
     <Link to={`/details/product/${props.id}`}> <img class="card__image" alt={props.seo} src={props.imageURL} />
        <div class="product-card__text">
          {props.name}
        </div>
        <div class="product-card__price">${props.price}</div>
        
      
</Link> 
      <div class="buttons">
 <button class="addToCart" href="/add/cart/:productId">Add to Cart</button>

      </div>
    </li>
     
</div>

        

    );
  }
  
  export default Post;