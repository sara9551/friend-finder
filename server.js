// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "survey.html"));
  });
  
  // Displays all friends
  app.get("/api/friends", function(req, res) {
	return res.json(friends);
  });
  
  require("./routes/apiRoutes")(app);
  require("./routes/htmlRoutes")(app);
  
  app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
  });
  
  app.listen();

