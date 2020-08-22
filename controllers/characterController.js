const mongoose = require("mongoose");
const Character = require("../models/characterModel");

exports.getAllCharacters = async (req, res) => {

	await Character.find((err, res) => {
		if (err) console.log(err);

	}).then( (respo) => {
		console.log(respo)
		res.json(respo)


	}).catch( (err) => console.log(err))
};

exports.createCharacter = (req, res) => {
	console.log(req);
	const characterData = new Character(req.body);

	characterData.save((err, res) => {
		if (err) console.log(err);
		console.log("here");

		console.log(res);
	});
};

exports.getSingleCharacter = (req, res) => {
	const queryData = req.body;

	Character.find(queryData)
		.exec()
		.then((result) => console.log(result));
};
