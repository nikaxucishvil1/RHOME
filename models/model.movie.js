const { Schema, default: mongoose } = require("mongoose");
const movieSchema = new Schema({
  name: {
    require: true,
    unique: true,
    type: String,
  },
  timeInHrs: {
    require: true,
    type: Number,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
