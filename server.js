var express = require('express');
// var request = require('request');
// var mongoose = require('mongoose');

var app = express();

//Middleware
app.use(express.static('public'));

//Import Route
const weatherRoute = require('./routes/weather');

//Use view engine
app.set('view engine', 'ejs');

//Middleware route
app.use('/',weatherRoute);






// app.set('view engine', 'ejs');

// mongoose.connect('');

// var citySchema = new mongoose.Schema({
//    name: String
// });

// var cityModel = mongoose.model('City', citySchema);

// var lasvegas = new cityModel({name: 'Las Vegas'});
// var toronto = new cityModel({name: 'Toronto'});
// var sydney = new cityModel({name: 'Sydney'});
// lasvegas.save();
// toronto.save();
// sydney.save();

// var city = 'Las Vegas';
// var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=4f416be68a9d3c0e7680750ecd0aa8b0`;

// app.get('/',function(req,res){
//     request(url, function(error,response,body){
//         weather_json = JSON.parse(body);
//         console.log(weather_json);

//         var weather = {
//             city: city,
//             temperature: Math.round(weather_json.main.temp),
//             description: weather_json.weather[0].description,
//             icon: weather_json.weather[0].icon
//         };

//         var weather_data = {weather: weather};

//         res.render('weather', weather_data);
//     });

    
// });

app.listen(8000);