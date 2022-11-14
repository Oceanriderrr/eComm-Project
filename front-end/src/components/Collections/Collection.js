import "./Collections.css"

function Collection(props) {
    return (


<li class = "hexagon-list">
    <div class="hexagon">
        <img src="https:via.placeholder.com/500" alt=""/>
        <h1>{props.collectionName}</h1>
        <p>{props.collectionDescription}</p>
    </div>
  </li>



        

    );
  }
  
  export default Collection;