var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var bcrypt = require('bcrypt');

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

router.get('/:id',  (req, res) =>{
    User.find({_id:req.params.id},  (err, users) =>{
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

router.get('/',  (req, res) =>{
    User.find({},  (err, users) =>{
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

router.post('/Login', (req, res) => {

User.findOne({email: req.body.email} ).exec(

    (err, user) => {
            if(err){return res.status(500).send("There was a problem in login."); }
            else if (!user){ return res.status(401).send("User Does`t exist")}
            bcrypt.compare(req.body.password, user.password, (err, result) =>{
                if (result === true) {
                    res.status(200).send(user);
                } else {
                    res.status(402).send('user or password incorrect');
                }
              })        
    }

);
});


module.exports = router;

