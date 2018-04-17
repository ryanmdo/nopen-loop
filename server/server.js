var express = require('express');
var router = require('./routes/routes.js');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../client'));
app.use(express.static(path.join(__dirname,'../client')));


//connect to mongoDB
mongoose.connect('mongodb://localhost/nopen_loop_dev_db');

app.use('/', router);

module.exports = app;



