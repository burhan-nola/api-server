const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hey this is my API running ?");
});

app.listen(1000, () => {
  console.log(`Server Started}`);
});

module.exports = app;
