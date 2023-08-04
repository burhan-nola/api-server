const express = require("express");
const mongoose = require("mongoose");

const mongoString = process.env.MONGODB_URI;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server started" });
});

app.listen(1000, () => {
  console.log(`Server Started}`);
});

module.exports = app;
