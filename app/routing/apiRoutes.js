var friendsData = require("../data/friends");

// get request
module.exports = function (app) {
	app.get("/api/friends", function (_req, res) {
		res.json(friendsData);
	});

	//submits a form and thus submits data to the server
	app.post("/api/friends", function (req, res) {
		var newlyFoundFriend = req.body;
		var totalDifference = 0;

		// looping through all the friend match possibilities 

		for (var i = 0; i < friendsData.length; i++) {
			console.log(friendsData)
		}

		// looping through the scores the matches and calculating
		for (var k = 0; k < friendsData[i].length; i++) {
			totalDifference += Math.abs(parseInt(newlyFoundFriend[k]) - parseInt(friendsData[i].scores[k]));

			userResponses.push(totalDifference);
		}

		// saving it to database
		friendsData.push(newlyFoundFriend);

		res.json(friendsData);

	});

};