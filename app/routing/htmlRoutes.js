var path = require("path");
module.exports = function(app) {
	
	// Routes
	app.get("/home", function(_req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	app.get("/survey", function(_req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	  });
};