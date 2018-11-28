const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/database')

const User = require('../models/user');

// Register
router.post('/register', function (req, res, next){
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    socialsite: req.body.socialsite,
    game: req.body.game,
    describe: req.body.describe
  });

  User.addUser(newUser, function(err, user){
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else{
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', function(req,res,next){
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, function(err, user){
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg:'User not found'});
    }

    User.comparePassword(password, user.password, function(err, isMatch){
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' +token,
          user:{
            id:user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            socialsite: user.socialsite,
            game: user.game,
            describe: user.describe
          }
        });
      } else {
        return res.json({success: false, msg:'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), function(req,res,next){
  res.json({user:req.user});
});

router.get('/all', function(req, res){
  User.find({}, function(err, docs){
    if (err) throw err;
    else res.json({
      users : docs
    });
  });
});

router.get('/:username', function(req, res){
  User.getUserByUsername(req.params.username, function(err, user){
    if(err) throw err;
    if(!user){
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else{
      res.json({
        success:true,
        user:{
          id:user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          socialsite: user.socialsite,
          game: user.game,
          describe: user.describe
          }
      });
    }
  });
});

module.exports = router;
