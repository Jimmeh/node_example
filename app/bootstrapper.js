module.exports = function(server, done) {
	var dependencies = 1;
	require('./authentication/route_registrar')(server, function () { if (--dependencies === 0) done();});
};