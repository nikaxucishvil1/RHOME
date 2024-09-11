const { Router } = require("express");
const getAll = require("./services/getAll.service");
const createMovie = require("./services/createMovie.service");
const deleteMovie = require("./services/delete.service");
const updateMovie = require("./services/update.service");
const middleWare = require("../middlewears/movies.middleware");

const moviesRouter = Router();

moviesRouter.use(middleWare);

moviesRouter.get("", getAll);

moviesRouter.post("/create", createMovie);

moviesRouter.delete("/delete/:id", deleteMovie);

moviesRouter.patch("/update/:id", updateMovie);

module.exports = moviesRouter;
