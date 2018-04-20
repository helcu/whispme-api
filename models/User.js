// User.js
var mongoose = require('mongoose');  
//falta poner los required de la entidad

var UserSchema = new mongoose.Schema({
  userName: { type:String, required: true },    
  email: { type:String, required: true },
  password: { type:String, required: true },
  bio: { type: String , required: false},
  photo : {type: String, required: false},
  followers: {type: Number, required: false},
  tokenId :{type: String, require: false},
  firebaseToken:{type: String, required: false}, 
  update:{type: Date, default: Date.now}
});

mongoose.model('User', UserSchema);
//module.exports = mongoose.model('User');