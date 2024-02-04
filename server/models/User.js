const mongoose = reuqire("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, minLength: 8 },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
