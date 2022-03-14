require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection
    .on('open',() => {
        console.log('Mongoose connection open')
    })
    .on('error',(err) => {
        console.log(`Connection error: ${err.message}`)
    })
    
require('./models/Registration');
const app = require('./app'); //import the express app created in app.js

const server = app.listen(3000, function() {
    console.log(`Express is running on port ${server.address().port}`);
}); 
//tell the app to listen on port 3000 for incoming connections and output a message to the terminal to indicate the server is running