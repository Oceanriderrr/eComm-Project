const url = "http://localhost:5000/api/contact";
let options = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    
}

export default function ContactForm(data){
    console.log(data);
    options.body= JSON.stringify(data);
    console.log(options);
    return fetch(url, options)
            .then(response => {
                console.log(response.cookie);
            return response.json()} )
            .catch(error =>{
                console.log(error)
                return error;
            });
}