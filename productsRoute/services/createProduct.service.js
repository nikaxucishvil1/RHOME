const productModel = require("../../models/model.product");

module.exports = async (req, res) => {
  const { name, priceInGel } = req.body;
  const exists = await productModel.findOne({ name });
  if (exists) {
    return res.json({
      error: true,
      message: "product already exists",
    });
  }
  const newProduct = await productModel.create({ name, priceInGel });
  res.json({ message: "created", product: newProduct });
};
