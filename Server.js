const express = require('express');
const cors =require('cors');
const mongoose =require('mongoose');
const axios = require('axios');

require('dotenv').config();

const app= express();
const port= process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri='mongodb+srv://Tywest121:Ty11082001!@cluster0.i36caqb.mongodb.net/Capstone-Project'
mongoose.connect(uri,{useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
const bookingRouter =  require('./routes/Bookings')
const ContactsRouter = require('./routes/Bookings');
const AttractionsRouter = require('./routes/Attractions1')
app.use('/booking', bookingRouter)



app.use('/contact', ContactsRouter);
// app.use('/addattraction', AddAttractionsRouter);
app.use('/attractions', AttractionsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


// const options = {
//   method: 'GET',
//   url: 'https://forecast9.p.rapidapi.com/',
//   headers: {
//     'X-RapidAPI-Key': 'cc95c5ec40msh3a922f0274ab9bdp14553ajsnc9173b7303b5',
//     'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }