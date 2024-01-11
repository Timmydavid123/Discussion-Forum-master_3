import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './ConnectPage.css'; // Import your custom CSS for styling

const ConnectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // You can perform additional actions based on the selected category if needed
  };

  return (
    <div className="connect-page-container">
      <h2>Connect</h2>
      <p>Select a category to find:</p>

      {/* Category Dropdown */}
      <Dropdown onSelect={(eventKey) => handleCategoryChange(eventKey)}>
        <Dropdown.Toggle variant="primary" id="category-dropdown">
          {selectedCategory || 'Select Category'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Professionals">Professionals</Dropdown.Item>
          <Dropdown.Item eventKey="NonProfessionals">Non-Professionals</Dropdown.Item>
          <Dropdown.Item eventKey="Dating">Dating</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Image Section */}
      <div className="image-section">
        {/* Display images based on the selected category */}
        {selectedCategory === 'Professionals' && (
          <div>
            <h3>Professionals</h3>
            {/* Add images for Professionals */}
            <img src="professional-image1.jpg" alt="Professional 1" />
            <img src="professional-image2.jpg" alt="Professional 2" />
          </div>
        )}

        {selectedCategory === 'NonProfessionals' && (
          <div>
            <h3>Non-Professionals</h3>
            {/* Add images for Non-Professionals */}
            <img src="non-professional-image1.jpg" alt="Non-Professional 1" />
            <img src="non-professional-image2.jpg" alt="Non-Professional 2" />
          </div>
        )}

        {selectedCategory === 'Dating' && (
          <div>
            <h3>Dating</h3>
            {/* Add images for Dating */}
            <img src="dating-image1.jpg" alt="Dating 1" />
            <img src="dating-image2.jpg" alt="Dating 2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectPage;