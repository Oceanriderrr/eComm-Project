import "./Post.css";

function Post(props) {
    return (

<div>
{/* <a href="/details/product/:productId">
<p className="productName">{props.productName}</p>

<p className="imageURL">{props.imageURL}</p>

<p className="seo">{props.seo}</p>

<p className="description">{props.description}</p>

<p className="price">{props.price}</p>

<p className="vendor">{props.vendor}</p>
</a>
<hr></hr> */}
<li class="card">
      <a class="card__link" href="/details/product/:productId"><img class="card__image" alt={props.seo} src="https://picsum.photos/400?image=550" />
        <div class="card__text">
          {props.productName}
        </div>
        <div class="card__price">${props.price}</div>
        
      </a>
 <button class="addToCart" href="/add/cart/:productId">Add to Cart</button>
    </li>
     
</div>

        

    );
  }
  
  export default Post;