const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attractionsSchema = new Schema({
    title: {type: String, required:true},
    address: {type: String, required: true},
    description: {type:String,required:true},
    ratings:{type:String,required:true},
}, {
    timestamps:true,    
});

const Attractions = mongoose.model('Attractions', attractionsSchema );

module.exports=Attractions;