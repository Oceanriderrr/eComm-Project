

let options = {
    method:"GET",

}
export default function getUser(data){

    const url = "http://localhost:9999/api/user/"+data.id;
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