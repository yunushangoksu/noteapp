const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const mongoose = require("mongoose");
const site = require("./routes/site.js");
const auth = require("./routes/auth.js");
const connectDB = require("./db.js");
require("dotenv").config();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/", site);
app.use("/auth", auth);

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
