const movieModel = require("../../models/model.movie");

module.exports = async (req, res) => {
  const { id } = req.params;
  const movie = await movieModel.findById(id);
  if (!movie) return res.json({ error: true, message: "not found" });
  await movieModel.findByIdAndDelete(id);
  res.json(movie);
};
