

let options = {
    method:"GET",

}
export default function getDetails(productId){
    console.log(productId);
    console.log("above is getDetails data")
    const url = "http://localhost:5000/details/product/"+productId;
    return fetch(url,options)
    .then(response => {
        // console.log(response.cookies);
       return response.json();
})
    .catch(error=>{
        console.error(error)
        return error;
    })
}