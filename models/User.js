// User.js
var mongoose = require('mongoose');  
var bcrypt = require('bcrypt');
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