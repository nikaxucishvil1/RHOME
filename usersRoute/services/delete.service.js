const userModel = require("../../models/model.user");

module.exports = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) return res.json({ error: true, message: "not found" });
  await userModel.findByIdAndDelete(id);
  res.json(user);
};
