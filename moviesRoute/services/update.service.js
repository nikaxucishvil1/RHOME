const movieModel = require("../../models/model.movie");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, timeInHrs } = req.body;
  const movie = await movieModel.findById(id);
  if (!movie) return res.json({ error: true, message: "not found" });
  const updatedMovie = await movieModel.findByIdAndUpdate(
    id,
    { name, timeInHrs },
    { new: true }
  );
  res.json(updatedMovie);
};
