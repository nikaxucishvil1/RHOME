const movieModel = require("../../models/model.movie");

module.exports = async (req, res) => {
  const movies = await movieModel.find();
  if (movies.length <= 0)
    res.json({ error: true, message: "no movies in db" });
  res.json(movies);
};
