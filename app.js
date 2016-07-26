var express = require('express');
var request = require("request");

var app = express();

app.get('/', function (req, res) {
	var latitude0 =  req.query.latitude0;
	var longitude0 =  req.query.longitude0;

	var latitude1 =  req.query.latitude1;
	var longitude1 =  req.query.longitude1;

	var bodyResponse = "";

	var bodyFormData = latitude0+","+longitude0+","+latitude1+","+longitude1;
	console.log(bodyFormData);

	//-122.19404099999997,47.6178819,-122.19672203063965,47.627570199064884

	//10900 NE 8th St #700, Bellevue, WA 98004
	//1905 108th Ave NE, Bellevue, WA 98004, EE. UU.
	

	//?latitude0=-122.19404099999997&longitude0=47.6178819&latitude1=-122.19672203063965&longitude1=47.627570199064884

	var options = { 
	method: 'POST',
	url: 'http://pokerev.r3v3rs3.net:8080/api/mapobjects/bbox',
  	formData: 
  		{ bbox: bodyFormData, zoom: '18'}
 	};
	
	res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('WebStask.io PokemonGo - PokenStops \n\n');
    res.write('Form Here (-122.19404099999997,47.6178819): 10900 NE 8th St #700, Bellevue, WA 98004\n');   
    res.write('To Here (-122.19672203063965,47.627570199064884): 1905 108th Ave NE, Bellevue, WA 98004, EE. UU.\n\n');        

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		console.log(body);

		res.write(body);
  		res.end();
            
	});



});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});