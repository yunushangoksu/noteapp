const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();
const connectDB = require("./db.js");
const User = require("./models/User.js");
const Notes = require("./models/Notes.js");
require("dotenv").config();
app.use(cors());
connectDB();

router.get("/", (req, res) => {
  res.send("Hello from our server!");
});

router.post("/", (req, res) => {
  res.send("Merhaba Express");
});

app.use("/", router);

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
