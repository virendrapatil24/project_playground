const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
app = express();

app.use(express.json());
app.use(cors());

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

app.post("/api/login", async (req, res) => {
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
  const token = generateToken(username);
  res.status(200).json({ message: "User signed in successfully", token });
});

app.get("/api/todos", authenticateToken, (req, res) => {
  const { username } = req.user;

  if (!todos[username])
    return res.status(404).json({ message: "No TODOs found for this user." });

  res.status(200).json(todos[username]);
});

app.post("/api/todos", authenticateToken, (req, res) => {
  const { username } = req.user;
  const { text } = req.body;

  const todo = { id: currentIndex, text: text, done: false };
  todos[username].push(todo);
  currentIndex++;
  res.status(201).json(todo);
});

app.put("/api/todo/:id", authenticateToken, (req, res) => {
  const { username } = req.user;
  const { id } = req.params;

  const userTodos = todos[username];
  const todo = userTodos.find((todo) => todo.id === parseInt(id));

  if (!todo) return res.status(404).json({ message: "TODO not found" });

  todo.done = !todo.done;
  res.status(200).json(todo);
});

app.delete("/api/todo/:id", authenticateToken, (req, res) => {
  const { username } = req.user;
  const { id } = req.params;

  todos[username] = todos[username].filter((todo) => todo.id !== parseInt(id));
  res.status(200).json({ message: "TODO deleted" });
});

app.listen(3000, () => {
  console.log("Backend is running on http://localhost:3000");
});
