var express = require('express');
var consign = require('consign');
var express_validator = require("express-validator");
var bodyParser= require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express_validator());
consign()
.include('app/routes')
//necessario colocar a extensao
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);
module.exports = app;
