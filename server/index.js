const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./db.js");
require("dotenv").config();
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
