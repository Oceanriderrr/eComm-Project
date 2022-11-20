const url = "http://localhost:5000/create/product";
let options = {
    method:"POST",
    headers: {
        'Content-Type': 'application/json'  
    }
}

export default function createProduct(data,jwt){
    options.body = JSON.stringify(data);

    options.headers["Authorization"] = "Bearer "+jwt;
    console.log(options);
    return fetch(url,options)
            .then(response => {
                console.log(response)
              return response.json()
            })
            .catch(error=>{
                console.log(error)
                return error;
            });

}