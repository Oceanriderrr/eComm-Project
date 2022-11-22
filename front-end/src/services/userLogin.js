const url = "http://localhost:5000/api/user/login";
let options = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    
}

export default function userLogin(data){
    // console.log(data);
    options.body = JSON.stringify(data);
    // console.log(options);
    //turn our javascript object to a json object then do the fetch
    return fetch(url,options)
    .then(response => {
        // console.log(response.cookies);
       return response.json();
})
    .catch(error=>{
        // console.error(error)
        return error;
    })
}