const { User } = require("../models/index");
const userController = {};

userController.newUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = {
      name: name,
      email: email,
      password: password,
    };
    const users = await User.create(user);
    return res.json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

userController.getUser = async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
};

module.exports = userController;