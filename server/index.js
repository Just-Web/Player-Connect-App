var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var _ = require('lodash');
var cors = require('cors');
var passport = require('passport');
const bcrypt = require('bcryptjs');
const config = require('./config/database');

// Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', function(){
  console.log('Connected to database '+ config.database);
});

// On Error
mongoose.connection.on('error', function(err){
  console.log('Database error: '+ err);
});

// Create the application.
const app = express();

const user = require('./routes/users');

// Setting port number for backend
const port = 3000;

//use CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Add Middleware necessary for REST API's
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/user', user);

// Connect to MongoDB
/*mongoose.connect('mongodb://localhost/playerconnect');
mongoose.connection.once('open', function() {
    app.models = require('./models/index');

    // Load the routes.
    var routes = require('./routes');
    _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
    });
});*/

//Index Route
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

app.get('/cors',  function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

//Initializing port number
app.listen(port, function(){
  console.log('Server started on port ' + port);
});
