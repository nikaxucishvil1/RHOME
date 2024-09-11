const userModel = require("../../models/model.user");

module.exports = async (req, res) => {
  const users = await userModel.find();
  if (users.length <= 0)
    res.json({ error: true, message: "no users in db" });
  res.json(users);
};
