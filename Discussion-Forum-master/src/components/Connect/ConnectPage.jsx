import React, { useState } from 'react';
import { Dropdown, Button, Modal, Form } from 'react-bootstrap';
import './ConnectPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConnectPage = () => {
  const [selectedField, setSelectedField] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const categories = [
    {
      name: 'Professionals',
      subcategories: [
        'Doctor', 'Nurse', 'Pharmacist', 'Dentist', 'Medical Laboratory Scientist',
        'Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Computer Engineer', 'Chemical Engineer',
        'Lawyer', 'Judge', 'Legal Officer', 'Legal Researcher',
        'Teacher', 'Lecturer', 'School Administrator', 'Educational Consultant',
        'Software Developer', 'Network Engineer', 'Database Administrator', 'IT Consultant',
        'Accountant', 'Financial Analyst', 'Banker', 'Auditor',
        'Entrepreneur', 'Business Analyst', 'Human Resources Manager', 'Marketing Executive',
        'Farmer', 'Agricultural Engineer', 'Agronomist', 'Veterinary Doctor',
        'Journalist', 'Public Relations Officer', 'Social Media Manager', 'Radio/TV Presenter',
        'Actor/Actress', 'Musician', 'Artist', 'Filmmaker',
        'Architect', 'Builder', 'Real Estate Agent', 'Quantity Surveyor',
        'Pilot', 'Driver', 'Logistics Manager', 'Traffic Warden',
        'Environmental Scientist', 'Geologist', 'Town Planner', 'Ecologist',
        'Hotel Manager', 'Tour Guide', 'Event Planner', 'Travel Agent'
      ],
    },
    {
      name: 'NonProfessionals',
      subcategories: [
        'Agricultural Labor',
        'Artisan and Craftsmanship',
        'Retail and Sales',
        'Service Industry',
        'Transportation',
        'Construction Labor',
        'Domestic Work',
        'Factory Workers',
        'Art and Entertainment',
        'Mining and Quarrying',
        'Casual Labor',
        'Street Hawking',
        'Unskilled Labor',
        'Fishermen',
        'Auto Mechanics',
      ],
    },
    {
      name: 'Dating',
      subcategories: ['Romantic', 'Casual', 'Long-Term'],
    },
  ];

  const handleFieldSelect = (field) => {
    setSelectedField(field);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleShowJoinModal = () => setShowJoinModal(true);
  const handleCloseJoinModal = () => setShowJoinModal(false);

  const renderCategories = () => {
    return (
      <>
        <Dropdown.Toggle variant="primary" id="category-dropdown">
          {selectedCategory || 'Select Category'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categories.map((category) => (
            <Dropdown.Item key={category.name} eventKey={category.name}>
              {category.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </>
    );
  };

  const renderSubcategories = () => {
    return (
      <>
        <Dropdown.Toggle variant="primary" id="subcategory-dropdown">
          {selectedSubcategory || 'Select Subcategory'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categories
            .find((category) => category.name === selectedCategory)
            .subcategories.map((subcategory) => (
              <Dropdown.Item key={subcategory} eventKey={subcategory}>
                {subcategory}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </>
    );
  };

  const renderAdditionalFields = () => {
    switch (selectedField) {
      case 'Professionals':
        return (
          <>
            {renderCategories()}
            {selectedCategory && renderSubcategories()}
            <Form.Group controlId="formBasicWorkplace">
              <Form.Label>Your Place of Work</Form.Label>
              <Form.Control type="text" placeholder="Enter your place of work" />
            </Form.Group>
            <Form.Group controlId="formBasicWorkType">
              <Form.Label>Your Type of Work</Form.Label>
              <Form.Control type="text" placeholder="Enter your type of work" />
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Your Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
            <Form.Group controlId="formBasicOffer">
              <Form.Label>What You Have to Offer</Form.Label>
              <Form.Control type="text" placeholder="Enter what you have to offer" />
            </Form.Group>
            <Form.Group controlId="formComplexQuestion1">
              <Form.Label>Describe a challenging project you've worked on.</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Provide details about a challenging project you've worked on." />
            </Form.Group>
            <Form.Group controlId="formComplexQuestion2">
              <Form.Label>How do you stay updated with the latest trends in your industry?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="How do you stay updated with the latest trends in your industry?" />
            </Form.Group>
          </>
        );

      case 'NonProfessionals':
        return (
          <>
            {renderCategories()}
            {selectedCategory && renderSubcategories()}
            <Form.Group controlId="formBasicWorkType">
              <Form.Label>Your Type of Work</Form.Label>
              <Form.Control type="text" placeholder="Enter your type of work" />
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Your Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
            <Form.Group controlId="formBasicOffer">
              <Form.Label>What You Have to Offer</Form.Label>
              <Form.Control type="text" placeholder="Enter what you have to offer" />
            </Form.Group>
            <Form.Group controlId="formComplexQuestion1">
              <Form.Label>Share a unique skill or talent that sets you apart.</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Share a unique skill or talent that sets you apart." />
            </Form.Group>
            <Form.Group controlId="formComplexQuestion2">
              <Form.Label>How do you contribute to your community or social causes?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="How do you contribute to your community or social causes?" />
            </Form.Group>
          </>
        );

      case 'Dating':
        return (
          <>
            {renderCategories()}
            {selectedCategory && renderSubcategories()}
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Your Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" />
            </Form.Group>
            <Form.Group controlId="formBasicOffer">
              <Form.Label>What You Have to Offer</Form.Label>
              <Form.Control type="text" placeholder="Enter what you have to offer" />
            </Form.Group>
            <Form.Group controlId="formComplexQuestion1">
              <Form.Label>Describe your ideal date or relationship.</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your ideal date or relationship." />
            </Form.Group>
            <Form.Group controlId="formComplexQuestion2">
              <Form.Label>What qualities are you looking for in a partner?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="What qualities are you looking for in a partner?" />
            </Form.Group>
          </>
        );

      default:
        return null;
    }
  };

  const handleJoinSubmit = (event) => {
    event.preventDefault();

    // Perform actions on form submission, e.g., API calls, redirect, etc.

    // For demonstration purposes, let's simulate a redirect after joining.
    if (selectedCategory) {
      // Simulate redirect based on the selected category.
      switch (selectedCategory) {
        case 'Doctor':
          window.location.href = '/doctor-dashboard';
          break;
        case 'Agricultural Labor':
          window.location.href = '/agricultural-labor-dashboard';
          break;
        // Add more cases for other categories as needed.
        default:
          // Redirect to a default page if the category is not handled.
          window.location.href = '/dashboard';
      }
    }

    // Close the modal after submitting the form.
    setShowJoinModal(false);
  };

  return (
    <div className="connect-page-container">
      <h2>Connect</h2>
      <p>Select a field, category, and subcategory to find:</p>

      {/* Field Dropdown */}
      <Dropdown onSelect={handleFieldSelect}>
        <Dropdown.Toggle variant="primary" id="field-dropdown">
          {selectedField || 'Select Field'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="Professionals">Professionals</Dropdown.Item>
          <Dropdown.Item eventKey="NonProfessionals">Non-Professionals</Dropdown.Item>
          <Dropdown.Item eventKey="Dating">Dating</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Category Dropdown */}
      {selectedField && selectedField !== 'Dating' && selectedCategory === null && (
        <Dropdown onSelect={handleCategorySelect}>
          {renderCategories()}
        </Dropdown>
      )}

      {/* Subcategory Dropdown */}
      {selectedCategory && selectedSubcategory === null && (
        <Dropdown onSelect={handleSubcategorySelect}>
          {renderSubcategories()}
        </Dropdown>
      )}

      {/* Display images based on the selected subcategory */}
      {selectedCategory && selectedSubcategory && (
        <div className="image-section">
          <h3>{`${selectedCategory} - ${selectedSubcategory}`}</h3>
          <div>
            <p>Person 1 (Verified)</p>
            <img src="person1-image.jpg" alt="Person 1" />
            <span>Verified Badge</span>
          </div>
          <div>
            <p>Person 2 (Verified)</p>
            <img src="person2-image.jpg" alt="Person 2" />
            <span>Verified Badge</span>
          </div>
        </div>
      )}

      {/* Join Section */}
      <div className="join-section d-flex justify-content-end mt-3">
        <Button variant="primary" onClick={handleShowJoinModal}>
          Join
        </Button>

        {/* Join Modal */}
        <Modal show={showJoinModal} onHide={handleCloseJoinModal}>
          <Modal.Header closeButton>
            <Modal.Title>Join and Upload Your Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleJoinSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicImage">
                <Form.Label>Upload Your Image</Form.Label>
                <Form.Control type="file" accept="image/*" />
              </Form.Group>

              {renderAdditionalFields()}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseJoinModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ConnectPage;