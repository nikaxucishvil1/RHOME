const productModel = require("../../models/model.product");

module.exports = async (req, res) => {
  const products = await productModel.find();
  if (products.length <= 0)
    res.json({ error: true, message: "no products in db" });
  res.json(products);
};
