import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [trendingNews, setTrendingNews] = useState([]);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trending');
        setTrendingNews(response.data);
      } catch (error) {
        console.error('Error fetching trending news:', error.message);
      }
    };

    const fetchAllNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/all-news');
        setAllNews(response.data);
      } catch (error) {
        console.error('Error fetching all news:', error.message);
      }
    };

    fetchTrendingNews();
    fetchAllNews();
  }, []);

  return (
    <div className="container">
      <h1 className="category-header">Trending News</h1>
      <div className="trending-news">
        {trendingNews.map((newsItem) => (
          <div key={newsItem.date} className="trending-news-item">
            <div className="news-item">
              <h2>{newsItem.title}</h2>
              <p>{newsItem.content}</p>
              <p>Category: {newsItem.category}</p>
              <img src={`http://localhost:5000${newsItem.imageUrl}`} alt={newsItem.title} />
            </div>
          </div>
        ))}
      </div>

      <h1 className="category-header">All News</h1>
      <div className="all-news">
        {allNews.map((newsItem) => (
          <div key={newsItem.date} className="all-news-item">
            <div className="news-item">
              <h2>{newsItem.title}</h2>
              <p>{newsItem.content}</p>
              <p>Category: {newsItem.category}</p>
              <img src={`http://localhost:5000${newsItem.imageUrl}`} alt={newsItem.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;