var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var latitude =  req.params.latitude;
	var longitude =  req.param.longitude;


	res.send('Hello World!');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});