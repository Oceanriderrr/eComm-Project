//This is gonne have a post request
const db = require("../config/database");
const Product = require("../models/Product");


module.exports = {
product:{
  get: function(req,res){
  
    },
    post: function(req,res){
        let body = req.body;
        console.log(body);
    
            new Product(body).save()
            .then((result)=>{
                console.log(result);
            });


    }   
}
};

