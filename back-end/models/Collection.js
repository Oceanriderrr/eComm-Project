const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const collectionSchema = new mongoose.Schema({
    collectionName:{type: String, },
    collectionDescription:{type:String}
});

module.exports = new Model('Collection', collectionSchema);