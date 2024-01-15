require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const users = require("./routes/users");
const posts = require("./routes/posts");
const tags = require("./routes/tags");
const replies = require("./routes/replies");
const http = require('http');
const socketIO = require('socket.io');
const newsRouter = require('./controller/newsController');

const app = express();


const { MONGODB_URI } = process.env;

// console.log('MongoDB Connection URI:', MONGODB_URI);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  app.use(cors({
    origin: 'https://discussion-forum-master-3.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Authorization',
  }));
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  
  // Add the Cross-Origin-Opener-Policy header here
  app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    next();
  });
  
  app.get("/", (req, res) => {
    res.send("request successfully sent!");
  });
  
  app.use("/users", users);
  app.use("/posts", posts);
  app.use("/tags", tags);
  app.use("/reply", replies);
  
  // Include the news-related routes
  app.use(newsRouter);
  
  const port = process.env.PORT || 4000;
  
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });