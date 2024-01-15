import React, { useRef, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./jumbotron.css";

const Jumbotron = () => {
  const adsContainerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      // Set isMounted to false when the component is unmounted
      isMounted.current = false;
    };
  }, []);

  const handleScroll = (direction) => {
    const container = adsContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollLeft += scrollAmount;
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/search?query=${searchQuery}`);

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const results = await response.json();

      // Check if the component is still mounted before updating the state
      if (isMounted.current) {
        setSearchResults(results);
      }

      // Redirect to the search results page
      history.push("/search-results");
    } catch (error) {
      console.error('Search Error:', error);
      // Handle error
    }
  };

  return (
    <div className="jumbotron">
      <div className="ads-container" ref={adsContainerRef}>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="ads-content">
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        <Link to="/forum" className="forum-link">
          Forum
        </Link>
      </div>
    </div>
  );
};

export default Jumbotron;