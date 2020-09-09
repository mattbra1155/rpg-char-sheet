const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
	name: {
		type: String,
    },
    descriptions: {
        race: {
		    type: String,
        },
        class: {
            type: String,
        },
        profession: {
            type: String,
        }
    },
	stats: {
		speed: {
			type: Number,
		},
		"weapon skill": {
			type: Number,
		},
		"ballistic skill": {
			type: Number,
		},
		strenght: {
			type: Number,
		},
		toughness: {
			type: Number,
		},
		wounds: {
			type: Number,
		},
		initiative: {
			type: Number,
		},
		attacks: {
			type: Number,
		},
		dexterity: {
			type: Number,
		},
		leadership: {
			type: Number,
		},
		intelligence: {
			type: Number,
		},
		cool: {
			type: Number,
		},
		"will power": {
			type: Number,
		},
		fellowship: {
			type: Number,
		},
    },
});
module.exports = mongoose.model("Character", characterSchema);
