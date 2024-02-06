const express = require("express");
const app = express();
const auth = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

auth.get("/", function (req, res) {
  res.send("Giriş alanı");
});

auth.post("/register", async function (req, res) {
  const { userName, name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ userName, name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

auth.post("/login", async function (req, res) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı Bulunamadı" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Geçersiz şifre" });
    }

    const token = jwt.sign({ username: user.username }, "gizliAnahatar");
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.mesage });
  }
});

auth.get("/:username", function (req, res) {
  res.send("Kullanıcı: " + req.params.username);
});

module.exports = auth;
