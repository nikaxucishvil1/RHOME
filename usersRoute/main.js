const { Router } = require("express");
const getAllUsers = require("./services/getAll.service");
const createUser = require("./services/createUsers.service");
const deleteUser = require("./services/delete.service");
const updateUser = require("./services/update.service");
const middleWare = require("../middlewears/users.middleware");

const usersRouter = Router();

usersRouter.use(middleWare);

usersRouter.get("", getAllUsers);

usersRouter.post("/create", createUser);

usersRouter.delete("/delete/:id", deleteUser);

usersRouter.patch("/update/:id", updateUser);

module.exports = usersRouter;
