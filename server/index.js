var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
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
mongoose.connect("mongodb://localhost/playerconnect", { useNewUrlParser: true });
mongoose.connection.once('open', function() {
    app.models = require('./models/index');

    // Load the routes.
    var routes = require('./routes');
    _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
    });
<<<<<<< HEAD

    console.log('Listening on port 3000...');
    app.listen(3000);
=======
		const port = process.env.PORT || 9000;
    app.listen(port, function(){
      console.log(`listening on port ${port}...`);
    });
>>>>>>> 9a29f489d919fc58496b1d11d778f8d44955c4f4
});

app.use('/hello', function(req, res, next) {
    res.send('Hello World!');
    next();
});


app.get('/hello1', function(req, res){
   res.send("Hello World!");
});

app.post('/hello1', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

var trys = require('./try.js');

//both index.js and things.js should be in same directory
app.use('/trys', trys);
