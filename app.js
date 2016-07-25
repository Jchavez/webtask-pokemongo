var express = require('express');
var request = require("request");

var app = express();


app.get('/', function (req, res) {
	var latitude0 =  req.query.latitude0;
	var longitude0 =  req.query.longitude0;

	var latitude1 =  req.query.latitude1;
	var longitude1 =  req.query.longitude1;

	var latitude2 =  req.query.latitude2;
	var longitude2 =  req.query.longitude2;
	var bodyResponse = "";


	var bodyFormData = latitude0+","+longitude0+","+latitude1+","+longitude1+","+latitude2+","+longitude2;
	console.log(bodyFormData);

	//?latitude0=-122.39952385425568&longitude0=37.77894066029837&latitude1=-122.39207804203033&longitude1=37.78292608704405&latitude2=-34.5804892&longitude2=-58.4370961

	var options = { 
	method: 'POST',
	url: 'http://pokerev.r3v3rs3.net:8080/api/mapobjects/bbox',
  	formData: 
  		{ bbox: bodyFormData, zoom: '18'}
 	};

	res.write('WebStask.io PokemonGo JC');

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log(body);
		bodyResponse = body
	});

res.write(bodyResponse);
res.end();
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});