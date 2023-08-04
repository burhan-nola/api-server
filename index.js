const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server started" });
});

app.listen(1000, () => {
  console.log(`Server Started}`);
});

module.exports = app;
