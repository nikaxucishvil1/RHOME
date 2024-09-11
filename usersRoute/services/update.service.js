const userModel = require("../../models/model.user");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await userModel.findById(id);
  if (!user) return res.json({ error: true, message: "not found" });
  const updatedUser = await userModel.findByIdAndUpdate(id, { name, email }, { new: true });
  res.json(updatedUser);
};
