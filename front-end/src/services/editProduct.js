

let options = {
    method:"GET",

}
export default function editProduct(data){
    console.log(data);
    console.log("above is edit product data")
    const url = "http://localhost:5000/edit/product/"+data._id;
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