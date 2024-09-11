const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    unique: true,
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
