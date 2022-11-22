

let options = {
    method:"GET",

}
export default function getProduct(data){
    console.log(data);
    console.log("above is get product data")
    const url = "http://localhost:5000/api/product/"+data._id;
    return fetch(url,options)
    .then(response => {
        console.log(response.cookies);
       return response.json();
})
    .catch(error=>{
        console.error(error)
        return error;
    })
}