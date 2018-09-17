var friendsData = require("../../friends.js");

module.exports = function (app) {
	app.get("/api/friends", function (req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function (req, res) {
		var newlyFoundFriend = req.body;
		var userResponses = [];
		var pairing = 0;
		var totalDifference = 0;

		for (var i = 0; i < userResponses.length; i++) {
			if (userResponses[i] <= userResponses[pairing]); {
				pairing = i;
			}
		}

		for (var i = 0; i < friendsData.length; i++) {
			for (var k = 0; k < newlyFoundFriend.length; k++) {
				totalDifference += Math.abs(friendsData[i].scores[k] - newlyFoundFriend[jk]);
			}

			userResponses.push(totalDifference);
		}

		friendsData.push(newlyFoundFriend);

		res.json(friendsData);

	});

	};