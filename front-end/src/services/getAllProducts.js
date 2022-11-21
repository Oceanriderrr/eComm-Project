const url = "http://localhost:5000/api/product";

let options = {
    method:"GET",

}
export default function getAllProducts(data){

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