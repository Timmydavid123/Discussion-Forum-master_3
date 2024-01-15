const express = require('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  imageUrl: String,
  date: { type: Date, default: Date.now },
});

const News = mongoose.model('News', newsSchema);

// Create an instance of the News API with your API key
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

async function getTrendingNews() {
  try {
    // Fetch top headlines from the News API
    const response = await newsapi.v2.topHeadlines({
      country: 'ng',
    });

    const trendingNews = response.articles.map((article) => ({
      title: article.title,
      content: article.description,
      category: article.source.name,
      imageUrl: `/public/${article.urlToImage}`, // Add this prefix
      date: article.publishedAt,
    }));

    return trendingNews;
  } catch (error) {
    throw new Error('Error fetching trending news: ' + error.message);
  }
}

async function getAllNews(source = null) {
  try {
    // Fetch top headlines from the News API based on source
    const response = source
      ? await newsapi.v2.topHeadlines({
          sources: source,
        })
      : await newsapi.v2.topHeadlines({
          country: 'ng',
        });

    const allNews = response.articles.map((article) => ({
      title: article.title,
      content: article.description,
      category: article.source.name,
      imageUrl: `/public/${article.urlToImage}`, // Add this prefix
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