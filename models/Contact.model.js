const mongoose = require('mongoose');
const {isEmail} = require('validator');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {type: String, required:true},
    email: { type: String,required: [true, 'Please enter an email'],unique: true,lowercase: true,validate: [isEmail, 'Please enter a valid email']},
    // phonenumber:{ type: String, required: [true, 'Please enter phone number'], minLength: [10, 'Mininum is 10 numbers']},
    question: {type: String}
});

const Contact = mongoose.model('Contact', contactSchema );

module.exports= Contact;