var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')


var User = mongoose.model('User');

router.post('/', (req, res) => {
    User.create({
            userName: req.body.userName,          
            email : req.body.email,
            password : req.body.password
        }, 
         (err, user) => {
            if (err) return res.status(500).send(err.toString());
            res.status(200).send(user);
        });
});

router.get('/',  (req, res) =>{
    User.find({},  (err, users) =>{
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

module.exports = router;