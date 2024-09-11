module.exports = (req, res, next) => {
  if (req.headers["password"] !== process.env.MIDDLEWARE_PASSWORD_MOVIES) {
    res.json("incorrect password");
    return;
  }
  next();
};
