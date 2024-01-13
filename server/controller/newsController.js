const express = require('express');
const router = express.Router();
const axios = require('axios');
const NewsAPI = require('newsapi');
const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  imageUrl: String,
  date: { type: Date, default: Date.now },
});

const News = mongoose.model('News', newsSchema);

async function getTrendingNews() {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    const country = 'ng';
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
    );

    const trendingNews = response.data.articles.map((article) => ({
      title: article.title,
      content: article.description,
      category: article.source.name,
      imageUrl: article.urlToImage,
      date: article.publishedAt,
    }));

    return trendingNews;
  } catch (error) {
    throw new Error('Error fetching trending news: ' + error.message);
  }
}

async function getAllNews(source = null) {
  try {
    let apiUrl;

    if (source) {
      apiUrl = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${process.env.NEWS_API_KEY}`;
    } else {
      apiUrl = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${process.env.NEWS_API_KEY}`;
    }

    const response = await axios.get(apiUrl);

    const allNews = response.data.articles.map((article) => ({
      title: article.title,
      content: article.description,
      category: article.source.name,
      imageUrl: article.urlToImage,
      date: article.publishedAt,
    }));

    return allNews;
  } catch (error) {
    throw new Error('Error fetching news: ' + error.message);
  }
}

router.get('/api/trending', async (req, res) => {
  try {
    const trendingNews = await getTrendingNews();
    res.json(trendingNews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/api/all-news', async (req, res) => {
  try {
    const source = req.query.source || null;
    const allNews = await getAllNews(source);
    res.json(allNews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;