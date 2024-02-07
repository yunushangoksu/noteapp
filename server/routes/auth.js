const express = require("express");
const app = express();
const auth = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

auth.post("/register", async function (req, res) {
  const { userName, name, email, password } = req.body;

  try {
    if (userName.length < 2 || name.length < 2 || email.length <= 5 || password.length < 8) {
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ userName, name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

auth.post("/login", async function (req, res) {
  const userName = req.body.loginUserName;
  const password = req.body.loginPassword;

  try {
    const user = await User.findOne({ userName });
    console.log(req.body);
    console.log({ userName, password });
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı Bulunamadı" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Geçersiz şifre" });
    }
    const accessToken = jwt.sign({ username: user.userName }, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = auth;
