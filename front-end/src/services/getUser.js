

let options = {
    method:"GET",

}
export default function getUser(data){
    console.log(data);
    console.log("above is getUser data")
    const url = "http://localhost:5000/api/user/"+data.id;
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