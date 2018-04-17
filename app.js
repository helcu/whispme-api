
// dependencias
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose');


var isProduction = process.env.NODE_ENV === 'production';

//Creacion de globla app
var app = express();
app.use(cors());

//configuracione normales de Express
app.use(require('morgan')('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public')); //vuelve publico el acceso de aechivos estaticos en esa ruta

//ver esta configracion para mas tarde 
/*if(isProduction){
    mongoose.connect(process.env.MONGODB_URI);
  } else {
    mongoose.connect('mongodb://localhost/conduit');
    mongoose.set('debug', true);
  }
*/
mongoose.connect('mongodb://userWhispme:userWhispme@ds241699.mlab.com:41699/whispme-api');

//var db = require('./db'); 

//instaciar las entidades de mongoose

require('./models/User');

app.use(require('./routes'));
//var UserController = require('./routes/api/UserController');

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


// development error handler
// will print stacktrace
if (!isProduction) {
    app.use(function(err, req, res, next) {
      console.log(err.stack);
  
      res.status(err.status || 500);
  
      res.json({'errors': {
        message: err.message,
        error: err
      }});
    });
  }

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    }});
  });


// finally, let's start our server...
var server = app.listen( process.env.PORT || 3000, function(){
    console.log('Puerto abierto .... ' + server.address().port);
  });