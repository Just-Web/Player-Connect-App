# Player-Connect-App

- Player-Connect is a place for gamers to meet up and find people to play games with.
- Every gamer want to knows when other gamers & friends are available to play online.
- Hence, there is no unified channel that connects gamers
- Strangers can sometimes bad teammates so, it's best for for gamers to connect and gain trust
 
## Project Setup 

### Client Side 
- Change directory to the '/client' directory
- Install Yeoman, Bower and Grunt - `npm install -g yo bower grunt-cli`
- Install generator-angular and generator-karma `npm install generator-angular generator-karma`
- Install bower - 'bower install'

### Client 2 Setup
## To install all the dependencies, from the client2 folder run: 
npm install 
## Run project locally: 
In client2 folder:
	`ng serve --open`
## Run Project on EC2 instance : 
`ng serve --host=0.0.0.0 --disable-host-check` 
Refer : https://github.com/angular/angular-cli/issues/2542

### Server Side 
- Change directory to the '/server' directory
- Install Express.js - `npm install express --save`
- Install Mongoose - `npm install mongoose --save`
- Install Body-Parser - `npm install body-parser --save`
- Install Nodemon - `sudo npm i -g nodemon`
- Install resourcejs - `npm install resourcejs --save`
- Install method-override - `npm install method-override --save`
- Install lodash - `npm install lodash --save`
- Install cors - `npm install cors --save`

### Node Authentication API
#### Version 
     1.0.0
#### Usage
 - `npm install`
 - `npm start`
#### End Points
 - `POST /users/register`
 - `POST /users/authenticate              //give back a token`
 - `GET /users/profile                    //Needs json web token to authorize`

### Setup Environment Variables 
- export PORT = 5000 (for mac)
- set PORT = 5000 (for windows)


## Running the Project Locally 
#### Client - ` grunt serve`  (Change directory to the '/client' directory)
#### Server - `nodemon index.js` (Change directory to the '/server' directory)

## How to Install and Run MongoDB 
- Open the Terminal app and type - `brew update`
- Install MongoDB -  `brew install mongodb`
- Create Directory db - `mkdir -p /data/db`
- Make sure that the  `/data/db` directory has the right permissions by running - sudo chown -R `id -un` /data/db
- Run the Mongo daemon - `mongod` 
- Reference - http://treehouse.github.io/installation-guides/mac/mongo-mac.html


