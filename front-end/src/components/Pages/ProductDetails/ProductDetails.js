import React, {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import {getDetails} from '../../../services';
// import Posts from '../../Posts/Posts';
// import Post from '../../Posts/Post';
import DetailsProduct from '../../DetailsProduct/DetailsProduct';
import { useParams } from 'react-router-dom';




function ProductDetails(props) {

  const { id } = useParams();


  const [posts, setPosts] = useState([]);
  console.log(props);
  console.log("above is the productDetails Props");

  let url = window.location.pathname;

  useEffect(()=>{
    getDetails(id).then(data=>{

      //setPosts(data);
      console.log("below is the data product details is rendering");
      console.log(data);
      setPosts(data);
    });
  }, []);


=======
  return (
    <DetailsProduct id={id} post={posts} />
  );


  const getProducts = async ()=>{
    let result = await fetch('https://localhost:5000/api/product')
    result= await result.json;
    setProducts(result);
  }
  
    /*
    return(
      <div class="pageContent">
<div>

  <Link to={`/edit/product/${id}`}>Edit</Link>
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
{/* {
  products.map((item,index)=>
  
 <ul key={item}>
  <li>{index+1}</li>
  <li>{item.name+1}</li>
  <li>{item.description}</li>
  <li>{item.imageURL}</li>
  <li>{item.vendor}</li>
  <li><button onClick={()=>deleteProduct(item._id)}>Delete</button></li>
 </ul>
  
  )} */}
</div>

          </div>
     );
     */
  }

  export default ProductDetails;