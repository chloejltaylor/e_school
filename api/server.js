require("dotenv").config()

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");

// Server setup

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
})

// Middlewares & functions

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, user) => {
    if(err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
} 

// Auth

app.post("/v1/auth/login", (req, res) => {
  const {
    email,
    password
  } = req.body;

  connection.query("SELECT * FROM Member WHERE email = ?", [email], async (err, result) => {
    if(err) return res.sendStatus(500);
    if(result.length === 0) return res.sendStatus(400);

    const member = result[0];

    if(!await bcrypt.compare(password, member.password)) return res.sendStatus(401);

    const user = {
      id: member.id,
      email: email
    };

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_TOKEN_SECRET);

    connection.query("INSERT INTO RefreshToken SET ?", {
      token: refreshToken
    }, (err, rs) => {
      if(err) return res.sendStatus(500);
    });
    
    res.json({
      accessToken: accessToken,
      refreshToken: refreshToken
    });
  });
});

app.post("/v1/auth/token", (req, res) => {
  const refreshToken = req.body.token;

  if(!refreshToken) return res.sendStatus(401);

  connection.query("SELECT * FROM RefreshToken WHERE token = ?", [refreshToken], (err, result) => {
    if(err) return res.sendStatus(500);
    if(result.length === 0) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET, (err, user) => {
      if(err) return res.sendStatus(403);
      const accessToken = generateAccessToken({ id: user.id, email: user.email });
      res.json({
        accessToken: accessToken
      });
    })
  });
})

app.delete("/v1/auth/logout", (req, res) => {
  const refreshToken = req.body.token;
  if(!refreshToken) return res.sendStatus(401);
  connection.query("DELETE FROM RefreshToken WHERE token = ?", [refreshToken], (err, result) => {
    if(err) return res.sendStatus(500);
    res.sendStatus(204);
  });
});

// Users

app.post("/v1/users", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    connection.query("INSERT INTO Member SET ?", {
      email: email,
      password: hashedPassword
    }, (err, rs) => {
      if(err) return res.sendStatus(500);
    });

    res.status(201).send();
  }
  catch(e) {
    res.status(500).send();
  }
});

// Actual routes

app.get("/v1/posts", verifyToken, (req, res) => {
  res.json({
    status: "success",
    payload: {
      user: req.user
    }
  })
});

app.get("/", (req, res) => {
  res.send("This is the homepage");
})

app.listen(3000, function(){
  connection.connect();
  console.log("API is running");
});
