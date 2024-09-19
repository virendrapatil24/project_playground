const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
app = express();

app.users(express.json());

users = [];
todos = {};
const SECRET_KEY = "secret_key";
currentIndex = 0;

const generateToken = (username) => {
  return jwt.sign({ username: username }, SECRET_KEY);
};

const authenticateToken = (req, res, next) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json({ message: "token not found." });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token." });
    req.user = user;
    next();
  });
};

app.post("/api/signup", async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  const userExist = users.find((u) => u.username === username);
  if (userExist) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({
    username: username,
    password: hashedPassword,
  });
  todos[username] = [];

  const token = generateToken(username);
  res.status(200).json({ message: "User signed up successfully", token });
});

app.post("/api/signin", async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({ message: "User not found!" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Incorrect Password!" });
  }
  res.status(200).json({ message: "User signed in successfully", username });
});
