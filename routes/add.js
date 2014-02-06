var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log("adding the friend!");
	res.render('add', data);
	var friendName = req.query.name;
	var friendDesc = req.query.description;
	var newFriend = {
		"name": friendName, 
		"description": friendDesc,
		"imageURL": "http://lorempixel.com/400/400/people"
	};
	res.render('add', newFriend);
	console.log(friendName);
	console.log(friendDesc);
	console.log("http://lorempixel.com/400/400/people");
	data["friends"].push(newFriend);
 }