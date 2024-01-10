import React from "react";
import './jumbotron.css'

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="search-container">
        <img src="logo1.png" alt="images" className="smooth-icon" />
        <input
          type="text"
          placeholder="Ask me anything"
          className="search-box"
          style={{ width: '600px' }}
        />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Jumbotron;