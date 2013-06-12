var restify = require("restify");

var server = restify.createServer({
	name: "Authentication"
});

server.listen(8880, function() {
	console.log('%s listening at %s', server.name, server.url);
});