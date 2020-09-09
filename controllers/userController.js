const mongoose = require("mongoose");
const User = require("../models/userModel");

exports.getUserData = async (req, res) => {
	await User.find((err, result) => {
		const queryData = req.body;

		User.find(queryData)
			.exec()
			.then((results) => console.log(results));
	});
};

exports.createUser = async (req, res) => {
	console.log(req.body);

	const userData = new User(req.body);

	userData.save((err, result) => {
		if (err) console.log(err);

		console.log(result);
	});
};
