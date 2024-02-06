const express = require("express");
const app = express();
const site = express.Router();

site.get("/", (req, res) => {
  res.send("Hello from our server!");
});

module.exports = site;
