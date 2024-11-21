const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserController = {
  //127.0.0.1:5000/api/auth/signup
  SignUp: async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    console.log('existingUser:', existingUser)

    if (existingUser) {
      return res.status(400).json({ message: "User name Already exist" });
    }

    try {
      const HashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: HashedPassword });
      await newUser.save();
      res.status(201).json({ message: "Signup Successfully Done" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  //127.0.0.1:5000/api/auth/signin
  SignIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).json({ message: "User is Not exist" });
      }
      const isMatch = await bcrypt.compare(password, existingUser.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Password not Matched" });
      }

      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
//127.0.0.1:5000/api/auth/change-password
  ChangePassword: async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(400).json({ message: "User is Not exist" });
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Old Password id InCorrect" });
      }

      user.password = await bcrypt.hash(newPassword, 10);
      await user.save();
      res.status(200).json({ message: "Password Updated" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },


  //127.0.0.1:5000/api/auth/user
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      if (user) return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
