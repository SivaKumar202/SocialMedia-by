const User = require("../Models/User");
const bcrypt = require("bcrypt");
const sayhello = (req, res) => {
  res.send("Hello from userController!");
  return res.status(200);
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User Created",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to register user: ${error.message}` });
  }
};

module.exports = { sayhello, registerUser };
