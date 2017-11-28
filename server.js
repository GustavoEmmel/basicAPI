var express = require('express');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty');
var fs = require('fs');
var consign = require('consign');

var app = express();

// this is to get info as x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// this is to receive form with multipart/files
app.use(multiparty());

consign()
	.include('./app/routes')
	.then('./app/controller')
	.then('./app/service')
	.into(app);

var port = 8080;
app.listen(port);

console.log('server on port '+ port);
