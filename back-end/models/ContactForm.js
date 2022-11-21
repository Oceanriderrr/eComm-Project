const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Array} = Schema.Types;

const contactSchema = new mongoose.Schema({
    name:{type: String, require: true },
    phone:{type: Number, require: true },
    subject:{type: String, require: true},
    message:{type: String, require: true,  },

});




module.exports = new Model('Contact', contactSchema);