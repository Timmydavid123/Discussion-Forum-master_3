import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./jumbotron.css";

const Jumbotron = () => {
  const adsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = adsContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="jumbotron">
      <div className="ads-container" ref={adsContainerRef}>
        {/* Repeat the ads to make a continuous loop */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="ads-content">
            {/* Replace with your ad content */}
            <p>Ad {index + 1}</p>
          </div>
        ))}
      </div>
      <div className="scroll-buttons">
        <button onClick={() => handleScroll("left")}>{"<"}</button>
        <button onClick={() => handleScroll("right")}>{">"}</button>
      </div>
      <div className="search-container">
        
        <img src="logo1.png" alt="images" className="smooth-icon" />
        <input
          type="text"
          placeholder="Ask me anything"
          className="search-box"
        />
        <button className="search-button">Search</button>
        <Link to="/forum" className="forum-link">Forum</Link>
      </div>
    </div>
  );
};

export default Jumbotron;