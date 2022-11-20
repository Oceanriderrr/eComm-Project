import "./Post.css";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../services";
function Post(props) {


    return (

<div class="product-item-div">

<li class="product-card">
      <a class="product-card__link" href="/details/product/{}"><img class="card__image" alt={props.seo} src={props.imageURL} />
        <div class="product-card__text">
          {props.name}
        </div>
        <div class="product-card__price">${props.price}</div>
        
      </a>

      <div class="buttons">
 <button class="addToCart" href="/add/cart/:productId">Add to Cart</button>

      </div>
    </li>
     
</div>

        

    );
  }
  
  export default Post;