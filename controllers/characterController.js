const mongoose = require("mongoose");
const Character = require('../models/characterModel')

exports.getAllCharacters = (req, res) => {
	Character.find((err, res) => {
		if (err) console.log(err);

		console.log(res);
	});
};

exports.createCharacter = (req, res) => {
	console.log(req)
	const characterData = new Character(req.body);

	characterData.save((err, res) => {
		if (err) console.log(err);
		console.log('here');

		console.log(res);
	});
};

exports.getSingleCharacter = (req, res) => {
	Character.findById()
		.then( result => console.log(result))
}
