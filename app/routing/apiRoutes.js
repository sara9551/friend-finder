var tables = require("../data/table-data.js");
var waitlist = require("../data/waitlist-data.js");
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});
	app.post("/api/friends", function() {
		friends = [];
	});
	// app.post("/api/tables", function(req, res) {
  	// 	var newTable = req.body;
 	// 	 console.log(newTable);
  	// 	if (tables.length < 5) {
	// 		tables.push(newTable);
	// 		res.json(true);
	// 	} else {
	// 		waitlist.push(newTable);
	// 		res.json(false);
	// 	}
	// });
};