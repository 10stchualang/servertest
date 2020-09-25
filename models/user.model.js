const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
  email: { type: String, required: true },
});

User.index({ email: 1 });

module.exports = mongoose.model("User", User);
