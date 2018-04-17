// User.js
var mongoose = require('mongoose');  
//falta poner los required de la entidad

var UserSchema = new mongoose.Schema({
  userName: { type:String, required: true },    
  email: { type:String, required: true },
  password: { type:String, required: true },
  update:{type: Date, default: Date.now}
});
mongoose.model('User', UserSchema);
//module.exports = mongoose.model('User');