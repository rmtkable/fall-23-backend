const mongoose = require("mongoose");
const {isEmail} = require('validator');
const Schema = mongoose.Schema;



const bookingSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  phonenumber: {
    type: String
  },
  date: {
    type: Date
  },
  bookingcomment: {
    type: String
  }
})


const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = Booking;