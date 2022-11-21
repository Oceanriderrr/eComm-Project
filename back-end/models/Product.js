const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Array} = Schema.Types;

const productSchema = new mongoose.Schema({
    name:{type: String, },
    quantity:{type: Number, },
    price:{type: Number, },
    vendor:{type: String, },
    description:{type: String, },
    imageURL : {type: String,validate: validImage},
    creator : { type: ObjectId,
        ref: "User"}

});

function validImage(val){
    if(val.startsWith("http://")||val.startsWith("https://")){
        return true;
    }
    return false;
    }



module.exports = new Model('Product', productSchema);