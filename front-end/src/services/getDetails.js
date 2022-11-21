const url = "http://localhost:5000/details/product/:_id";

let options = {
    method:"GET",

}
export default function getDetails(data){

    options.body = JSON.stringify(data);

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