# Player-Connect-App

- Player-Connect is a place for gamers to meet up and find people to play games with.
- Every gamer want to knows when other gamers & friends are available to play online.
- Hence, there is no unified channel that connects gamers
- Strangers can sometimes bad teammates so, it's best for for gamers to connect and gain trust
 
## Project Setup 

### Client Side Setup
- To install all the dependencies -  `npm install` 

### Server Side 
- To install all the dependencies -  `npm install` 

## Running the Project Locally 
- Client - ` grunt serve`  (Change directory to the '/client2' directory)
- Server - `nodemon index.js` (Change directory to the '/server' directory)

## Running Project on EC2 instance 
- `ng serve --host=0.0.0.0 --disable-host-check` 
- Refer : https://github.com/angular/angular-cli/issues/2542

## Backend End Points
- Refer : https://github.com/Just-Web/Player-Connect-App/blob/master/server/README.md

## How to Install and Run MongoDB 
- Open the Terminal app and type - `brew update`
- Install MongoDB -  `brew install mongodb`
- Create Directory db - `mkdir -p /data/db`
- Make sure that the  `/data/db` directory has the right permissions by running - sudo chown -R `id -un` /data/db
- Run the Mongo daemon - `mongod` 
- Reference - http://treehouse.github.io/installation-guides/mac/mongo-mac.html
