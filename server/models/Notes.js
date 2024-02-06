const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let notesSchema = new Schema({
  header: { type: String, require: true },
  note: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

let Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
