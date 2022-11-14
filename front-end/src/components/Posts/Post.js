import "./Post.css";

function Post(props) {
    return (

<div class="product-item-div">

<li class="product-card">
      <a class="product-card__link" href="/details/product/:productId"><img class="card__image" alt={props.seo} src="https://picsum.photos/400?image=550" />
        <div class="product-card__text">
          {props.productName}
        </div>
        <div class="product-card__price">${props.price}</div>
        
      </a>

      <div class="buttons">
 <button class="addToCart" href="/add/cart/:productId">Add to Cart</button>
 <button class="" href="/details/product/:productId">Details</button> 
      </div>
    </li>
     
</div>

        

    );
  }
  
  export default Post;