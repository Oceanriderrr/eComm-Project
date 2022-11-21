import {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import {getDetails} from '../../../services'
import Posts from '../../Posts/Posts'
import Post from '../../Posts/Post'
function ProductDetails(props) {
    const [posts,setPosts] = useState([]);
    const [name,setName] = useState("")
    const [vendor,setVendor] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [quantity,setQuantity] = useState("")
    const [imageURL,setImageURL] = useState("")
    
    let url = props._id



    useEffect(()=>{
      getDetails({
        id: props._id,
      })
      
      .then(data=>{
        console.log(data._id);
        console.log("above is the id");
        console.log(props);
        console.log("above is the props on getDetails page")
          //setPosts(data);
          console.log(data);


      })
  },[])

  
  

    return(
      <div class="pageContent">
<div>
  <Link to={`/edit/product/`}>Edit</Link>
  <Link>Delete</Link>
</div>

<div class="details-wrapper">
  <div class="details-card">
    <div class="product-left">
      <div class="details-header">
        <h1>{props.name}</h1>
        <h2>Sit down in modern</h2>
      </div>

      <div class="product-main">
        <div class="focus">
          <span>Description</span>
          <span>Details</span>
        </div>
        <p>{props.description}</p>
      </div>
  
      <div class="product-details">
        

        <div class="product-total">
          <h3>Total Price</h3>
          <p>${props.price}</p>
        </div>
      </div>

      <div class="product-btns">
        <a href="#" class="product-add">Add To Cart</a>
      </div>
    </div>
    <div class="product-right">
      <img src="{props.imageURL}" alt=""></img>
    </div>
  </div>
</div>

          </div>
     );
  }

  export default ProductDetails;