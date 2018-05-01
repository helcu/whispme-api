var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var bcrypt = require('bcrypt');

var Whisp = mongoose.model('Whisp');
