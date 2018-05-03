var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var bcrypt = require('bcrypt');

var Whisp = mongoose.model('Whisp');

router.post('/',(req,res) => {

    Whisp.create({
        owner: req.body.id,
        typewhisp: req.body.type,
        content: req.body.content,
        title: req.body.title,
        place: req.body.place,
        cordenate:{latitude: req.body.latitude, longitude:req.body.longitude},
        meta: {likes: 0, views: 0, comments:0}
    }, (err,whisp) =>{

        if (err) return res.status(500).send(err.toString());
            res.status(200).send(whisp);

    });

});


router.get('/findByCordenate',(req,res) => {

    Whisp.findOne({ 'cordenate.latitude':req.query.latitude,'cordenate.longitude':req.query.longitude}).populate('owner')
    .exec((err,whisp) => {

        if (err) return res.status(500).send(err.toString());
            res.status(200).send(whisp);

    } );

});

router.get('/trend',(req,res) => {

    Whisp.find({}).populate('owner').limit(10).sort('-meta.likes').exec((err,whisp) =>{

        if (err) return res.status(500).send(err.toString());
            res.status(200).send(whisp);

    });  

});

module.exports = router;
