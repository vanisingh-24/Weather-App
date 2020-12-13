var express = require('express');
var PORT = process.env.PORT || 8000;
var app = express();

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//Import Route
const weatherRoute = require('./routes/weather');

//Use view engine
app.set('view engine', 'ejs');

//Middleware route
app.use('/',weatherRoute);

app.listen(PORT);