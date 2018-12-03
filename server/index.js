var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var _ = require('lodash');
var cors = require('cors');
var passport = require('passport');


let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

const bcrypt = require('bcryptjs');
const config = require('./config/database');
const user = require('./routes/users');

//const client = require('socket.io').listen(4000).sockets;
// Setting port number for backend
const port = 3000;

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message.text, sender: message.sender, image: message.image});
  });
});


http.listen(5000, () => {
console.log('started on port 5000');
});

// Connect to database
mongoose.connect(config.database, function(err, db){
    if(err){
        throw err;
    }
    console.log('MongoDB connected...');
});

// On Connection
mongoose.connection.on('connected', function() {
  console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', function(err) {
  console.log('Database error: ' + err);
});

app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname)));

// Add Middleware necessary for REST API's
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('X-HTTP-Method-Override'));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/users', user);


// Create the application.
//const app = express();




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
app.get('/chats', function(req, res) {
  res.sendFile(path.resolve('../client/app/views/chatbot.html'));
});

app.get('/home', function(req, res) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("playerconnect");
    dbo.collection("users").find({}, { projection: { _id: 0, name: 1, email:1, username:1, socialsite:1, game:1, describe:1 , userImage:1} }).toArray(function(err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });
});


app.get('/cors', function(req, res, next) {
  res.json({
    msg: 'This is CORS-enabled for a Single Route'
  })
})


//Initializing port number
app.listen(port, function() {
  console.log('Server started on port ' + port);
});
