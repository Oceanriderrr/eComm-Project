import {useState,useEffect} from "react";
import { Navigate, useNavigate} from "react-router-dom";
import {editProduct} from '../../../services'



function EditProduct(props){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [vendor, setVendor] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");

    const navigate = useNavigate();


   
    
 
    // This will be out command if you are not the admin you need to naviagate the fuck out of this pageeeeee

      // if(!props.loggedIn){
      //   return  <Navigate to="/user/login" replace ={true} />
      // }
    
 
    function submitHandler(event){
      event.preventDefault();
      let hasError = false;
      if(description.length === 0){
        hasError = true;
      }
    
    
      if(!hasError){
        EditProduct({
          name,
          quantity,
          price,
          vendor,
          description,
          imageURL,
          
        },props.cookie).then((data)=>{
          console.log(data);
      setDescription("");
   
        })
    }else{
      console.log("There was an error, fix and try again")
    }
    }

    return(

      <div class="pageContent">

   
      <div className="login-box">

      <h2>Edit Product</h2>
      <form class="create-item-form" onSubmit={submitHandler}>

 
     
    
      <div className="form-body">
            <div className="input-item">
              <h5 for="productName">Product Name:</h5>
              
        <input type = "text" value={name} name= "name" onChange={e => {
        console.log(e.target.value);
        setName(e.target.value);
        }}></input>
            </div>

            <div className="input-item">
              <h5 for="quantity">Quantity:</h5>
           
                <input type = "text" value={quantity} name= "quantity" onChange={e => {
          console.log(e.target.value);
        setQuantity(e.target.value);
        }}></input>
            </div>


            <div className="input-item">
               <h5 for="price">Price:</h5>
                
                <input type = "text" value={price} name= "price" onChange={e => {
          console.log(e.target.value);
        setPrice(e.target.value);
        }}></input>
            </div>


            <div className="input-item">
              <h5 for="vendor">Vendor:</h5>
                
                <input type = "text" value={vendor} name= "vendor" onChange={e => {
          console.log(e.target.value);
        setVendor(e.target.value);
        }}></input>
            </div>

            <div className="input-item">
          <h5 for="description">Description:</h5>
              
                <input type = "text" value={description} name= "description" onChange={e => {
          console.log(e.target.value);
        setDescription(e.target.value);
        }}></input>
            </div>
            
            <div className="input-item">
                <h5 for="ImageURL">ImageURL:</h5>
                
                <input type = "text" value={imageURL} name= "imageURL" onChange={e => {
          console.log(e.target.value);
        setImageURL(e.target.value);
        }}></input>
            </div>
            
            <br></br>
            <div className="button">
            <button type="submit">Register Product</button>
            </div>
           
        </div> 
      </form> 
   </div>
</div>
    );
  }

  export default EditProduct;