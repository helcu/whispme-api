// User.js
var mongoose = require('mongoose');  
var bcrypt = require('bcrypt');
//falta poner los required de la entidad

var UserSchema = new mongoose.Schema({
  username: { type:String, required: true },    
  email: { type:String, required: true },
  password: { type:String, required: true },
  bio: { type: String , required: false, default: ''},
  photo : {type: String, required: false, default: ''},
  followers: {type: Number, required: false, default: 0},
  tokenId :{type: String, require: false, default: ''},
  firebaseToken:{type: String, required: false, default: ''}, 
  update:{type: Date, default: Date.now}
});

UserSchema.pre('save', function (next)  {

    var user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {

      if(error){return next(error);}

      user.password = hash;
      next();

    })

});


mongoose.model('User', UserSchema);
//module.exports = mongoose.model('User');