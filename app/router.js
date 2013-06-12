module.exports = function(app) {
	app.post('/login/basic', function(request, response, next) {
		console.log(request.params.user);
		response.send(401);
		return next();
	});
};