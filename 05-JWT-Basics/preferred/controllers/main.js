const jwt = require("jsonwebtoken");

const logon = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res
      .status(200)
      .json({ message: "Please provide email and password" });
  }
  const token = jwt.sign({ name, password }, process.env.SECRET, {
    expiresIn: "24h",
  });
  res.status(200).json({ token: token });
};

const hello = async (req, res) => {
  res.status(200).json({
    msg: `Hello ${req.user.name}! Welcome!`,
  });
};

module.exports = {
  logon,
  hello,
};
