/**
 * Created by alex on 9/23/16.
 */
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

router.get('/', function(req, res, next) {
    res.render('contact');
});

router.post('/', function(req, res, err){
    var options = {
        auth: {
            api_user: 'mkdecision_contact',
            api_key: 'Automat1B'
        }
    }

    var client = nodemailer.createTransport(sgTransport(options));
    var email = {
        from: req.body.name + " " + req.body.email,
        to: 'alex.sanciangco@mkdecision.com',
        subject: 'Hello little buddy',
        text: req.body.message
    };

    client.sendMail(email, function(err, info){
        if (err ){
            console.log(err);
        }
        else {
            console.log('Message sent: ' + info.response);
        }
    });
});





module.exports = router;