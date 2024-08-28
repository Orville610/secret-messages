const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Create a new message
router.post("/", async (req, res) => {
	const { content, secretKey } = req.body;

	try {
		const message = new Message({ content, secretKey });
		await message.save();
		res.status(201).json(message);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

// Retrieve a message by secret key
router.get("/:key", async (req, res) => {
	try {
		const message = await Message.findOne({ secretKey: req.params.key });
		if (!message) return res.status(404).json({ error: "Message not found" });
		res.json(message);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

module.exports = router;
