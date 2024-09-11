const productModel = require("../../models/model.product");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, priceInGel } = req.body;
  const product = await productModel.findById(id);
  if (!product) return res.json({ error: true, message: "not found" });
  const updatedProduct = await productModel.findByIdAndUpdate(id, { name, priceInGel }, { new: true });
  res.json(updatedProduct);
};
