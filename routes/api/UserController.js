var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var baseResponse = require('../../util/baseResponse.js')

var User = mongoose.model('User');

router.post('/', (req, res) => {
    User.create({
            username: req.body.username,          
            email : req.body.email,
            password : req.body.password
        }, 
         (err, user) => {
            if (err) return res.status(500).send(baseResponse(500,'ERROR', err.toString()));
            res.status(200).send(baseResponse(200,'OK', user));
        });
});

router.get('/:id',  (req, res) =>{
    User.find({_id:req.params.id},  (err, users) =>{
        if (err) return res.status(500).send(baseResponse(500,'ERROR', 'There was a problem finding the users'));
        res.status(200).send(baseResponse(200,'OK', users));
    });
});

router.get('/',  (req, res) =>{
    User.find({},  (err, users) =>{
        if (err) return res.status(500).send(baseResponse(500,'ERROR', 'There was a problem finding the users'));
        res.status(200).send(baseResponse(200,'OK', users));
    });
});

router.post('/login', (req, res) => {

User.findOne({username: req.body.username} ).exec(

    (err, user) => {
            if(err){return res.status(500).send(baseResponse(500,'ERROR', "There was a problem in login.")); }
            else if (!user){ return res.status(401).send(baseResponse(401,'ERROR', "User Does`t exist"));}
            bcrypt.compare(req.body.password, user.password, (err, result) =>{
                if (result === true) {
                    res.status(200).send(baseResponse(200,'OK', user));
                } else {
                    res.status(402).send(baseResponse(402,'ERROR', 'User or password incorrect'));
                }
              })        
    }

);
});


module.exports = router;

