# Player-Connect-App

## Project Setup 

### Client Side 
- Install Yeoman, Bower and Grunt - `npm install -g yo bower grunt-cli`
- Install generator-angular and generator-karma `npm install generator-angular generator-karma`
- Install bower - 'bower install'

### Server Side 
- Install Express.js - `npm install express --save`
- Install Mongoose - `npm install mongoose --save`
- Install Body-Parser - `npm install body-parser --save`
- Install Nodemon - `sudo npm i -g nodemon`
- Install resourcejs - `npm install resourcejs --save`
- Install method-override - `npm install method-override --save`
- Install lodash - `npm install lodash --save`

### Setup Environment Variables 
- export PORT = 5000 (for mac)
- set PORT = 5000 (for windows)


## Running the Project Locally 

### Client - ` grunt serve` 
### Server - `nodemon index.js`

## How to Install and Run MongoDB 
- Open the Terminal app and type - `brew update`
- Install MongoDB -  `brew install mongodb`
- Create Directory db - `mkdir -p /data/db`
- Make sure that the  `/data/db` directory has the right permissions by running - sudo chown -R `id -un` /data/db
- Run the Mongo daemon - `mongod` 
- Reference - http://treehouse.github.io/installation-guides/mac/mongo-mac.html
