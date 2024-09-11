const movieModel = require("../../models/model.movie");

module.exports = async (req, res) => {
  const { name, timeInHrs } = req.body;
  const exists = await movieModel.findOne({ name });
  if (exists) {
    return res.json({
      error: true,
      message: "mo  vie already exists",
    });
  }
  const newMovie = await movieModel.create({ name, timeInHrs });
  res.json({ message: "created", movie: newMovie });
};
