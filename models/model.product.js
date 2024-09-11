const { Schema, default: mongoose } = require("mongoose");
const productSchema = new Schema({
  name: {
    require: true,
    unique: true,
    type: String,
  },
  priceInGel: {
    require: true,
    type: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
