import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="search-container">
        <img src="smooth-icon.png" alt="Smooth Icon" className="smooth-icon" />
        <input type="text" placeholder="Search..." className="search-box" />
      </div>

    </div>
  );
};

export default Jumbotron;