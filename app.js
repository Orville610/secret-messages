const express = require("express");
const mongoose = require("mongoose");
const messageRoutes = require("./routes/messages");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// Use routes
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
