const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const MONGO_DB_URL = process.env.MONGO_DB_URL;
    mongoose.connect(MONGO_DB_URL);
    console.log("connected to Db")
  } catch (error) {
    console.log(error);
  }
};
