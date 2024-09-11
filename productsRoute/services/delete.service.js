const productModel = require("../../models/model.product");

module.exports = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findById(id);
  if (!product) return res.json({ error: true, message: "not found" });
  await productModel.findByIdAndDelete(id);
  res.json(product);
};
