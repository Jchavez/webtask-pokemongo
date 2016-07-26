var Express = require('express');
var Webtask = require('webtask-tools');
var server = Express();

server.use(require('body-parser'));

server.get('/', function (req, res) {
	

});


module.exports = Webtask.fromExpress(server);