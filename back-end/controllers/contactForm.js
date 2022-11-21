//This is gonne have a post request
const db = require("../config/database");
const Contact = require("../models/ContactForm");


module.exports = {
contact:{
  get: function(req,res){
  
    },
    post: function(req,res){
        let body = req.body;
        console.log(body);
    
            new Contact(body).save()
            .then((result)=>{
                console.log(result);
            });


    }   
}
};

