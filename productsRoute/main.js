const { Router } = require("express");
const getAll = require("./services/getAll.service");
const createProduct = require("./services/createProduct.service");
const deleteProduct = require("./services/delete.service");
const updateProduct = require("./services/update.service");
const middleWare = require("../middlewears/products.middleware")

const productRouter = Router();

productRouter.use(middleWare)

productRouter.get("", getAll);

productRouter.post("/create", createProduct);

productRouter.delete("/delete/:id", deleteProduct);

productRouter.patch("/update/:id", updateProduct);

module.exports = productRouter;
