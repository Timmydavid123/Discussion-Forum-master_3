require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('path');
const users = require("./routes/users");
const posts = require("./routes/posts");
const tags = require("./routes/tags");
const replies = require("./routes/replies");
const newsRouter = require('./controller/newsController');

const app = express();

const { MONGODB_URI } = process.env;

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

// CORS middleware
app.use(cors());

// Additional CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});

// Use the CORS proxy for every request
app.use((req, res, next) => {
  req.headers['x-target-url'] = 'https://backendxooth.vercel.app'; // Replace with your actual backend URL
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route to handle OPTIONS requests for all routes
app.options("*", (req, res) => {
  res.sendStatus(200);
});

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Define a simple mongoose model
const Item = mongoose.model('Item', {
  title: String,
  description: String,
});

// Route to handle search requests
app.get('/api/search', async (req, res) => {
  const { query } = req.query;

  try {
    // Use a regular expression for case-insensitive matching
    const results = await Item.find({
      $or: [
        { title: { $regex: new RegExp(query, 'i') } },
        { description: { $regex: new RegExp(query, 'i') } },
      ],
    });

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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