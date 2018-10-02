var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost/playerconnect');
mongoose.connection.once('open', function() {
    app.models = require('./models/index');

    // Load the routes.
    var routes = require('./routes');
    _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
    });
		const port = process.env.PORT || 9000;
    app.listen(port, function(){
      console.log(`listening on port ${port}...`);
    });
});
app.use('/hello', function(req, res, next) {
    res.send('Hello World!');
    next();
});

app.get('/', function(req, res) {
  res.send('Welcome to Player-Connect!!');
});

app.get('/about', function(req, res) {
  res.sendFile(path.resolve('../client/app/views/about.html'));
});

app.get('/home', function(req, res) {
  res.sendFile(path.resolve('../client/app/views/homepage.html'));
});

//use CORS
app.use(cors())
 app.get('/products',  function (req, res, next) {
app.get('/cors',  function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
