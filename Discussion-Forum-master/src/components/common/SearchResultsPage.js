import React from "react";
import "./SearchResultsPage.css"; // Import your CSS file

const SearchResultsPage = ({ searchResults }) => {
  return (
    <div className="search-results-container">
      <h2 className="search-results-heading">Search Results</h2>
      {searchResults && searchResults.length > 0 ? (
        <ul className="search-results-list">
          {searchResults.map((result) => (
            <li key={result._id} className="search-results-item">
              {result.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-results-message">No results found.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;