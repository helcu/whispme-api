var express = require('express');
var app = express();
var db = require('./db'); 

var UserController = require('./controllers/UserController');

app.use('/user', UserController);


module.exports = app;