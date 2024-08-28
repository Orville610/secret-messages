const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
	},
	secretKey: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Message", messageSchema);
