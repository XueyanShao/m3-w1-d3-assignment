const express = require('express'); //import express module
const path = require('path');
const routes = require('./routes/index'); //import routes file
const bodyParser = require('body-parser');

const app = express(); //create a new express app using express function and assign it to an app variable

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes); //whenever it receives a request from forward slash anything, use the routes file

module.exports = app; //export app variable so it can be imported and used in other files