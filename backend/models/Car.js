const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  year: Number,
  condition: String,
  images: [String],
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Car", carSchema);