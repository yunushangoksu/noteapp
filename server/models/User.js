const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  userName: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, minLength: 8 },
  createdAt: { type: Date, default: Date.now },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
