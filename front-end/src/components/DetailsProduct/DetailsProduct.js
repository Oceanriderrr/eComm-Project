import { Link } from 'react-router-dom';

function DetailsProduct(props) {
    return (
        <div class="pageContent">
            <div>
                <Link to={`/edit/product/${props.id}`}>Edit</Link>
                <Link>Delete</Link>
            </div>
            <div class="details-wrapper">
                <div class="details-card">
                    <div class="product-left">
                        <div class="details-header">
                            <h1>{props.post.name}</h1>
                            <h2>Sit down in modern</h2>
                        </div>
                        <div class="product-main">
                            <div class="focus">
                                <span>Description</span>
                                <span>Details</span>
                            </div>
                            <p>{props.post.description}</p>
                        </div>
                        <div class="product-details">
                            <div class="product-total">
                                <h3>Total Price</h3>
                                <p>${props.post.price}</p>
                            </div>
                        </div>
                        <div class="product-btns">
                            <a href="#" class="product-add">Add To Cart</a>
                        </div>
                    </div>
                    <div class="product-right">
                        <img src="{props.post.imageURL}" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsProduct;