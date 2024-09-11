const express = require("express");
const connectToDbFoo = require("./DB/connectToDb");
const productRouter = require("./productsRoute/main")
const usersRouter = require("./usersRoute/main")
const moviesRouter = require("./moviesRoute/main")

require("dotenv").config();

const server = express();

server.use(express.json());

connectToDbFoo();

server.use("/products",productRouter)

server.use("/users",usersRouter)

server.use("/movies",moviesRouter)

server.listen(3000, () =>
  console.log("server running on http://localhost:3000")
);
