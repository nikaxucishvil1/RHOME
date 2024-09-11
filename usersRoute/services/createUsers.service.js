const userModel = require("../../models/model.user");

module.exports = async (req, res) => {
  const { name, email } = req.body;
  const exists = await userModel.findOne({ email });
  if (exists) {
    return res.json({
      error: true,
      message: "user already exists",
    });
  }
  const newUser = await userModel.create({ name, email });
  res.json({ message: "created", product: newUser });
};
