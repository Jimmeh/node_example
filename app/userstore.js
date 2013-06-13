module.exports = function(done) {
	(function openDatabase() {
		var mongo = require('mongodb');

		var db = new mongo.Db('test', new mongo.Server('localhost', 27017, {}), {w:-1});
		db.open(function(err, db) {
			db.collection('test', function(err, collection) {
				done(collection);
			});
		});
	})();
};