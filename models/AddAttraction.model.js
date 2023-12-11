const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addattractionSchema = new Schema({
    attraction: {type: String, required:true},
    address: {type:String,required:true},
}, {
    timestamps:true,    
});

const AddAttraction = mongoose.model('AddAttraction', addattractionSchema );

module.exports=AddAttraction;