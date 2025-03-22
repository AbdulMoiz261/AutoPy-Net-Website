import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './tutorial.css';

export default function Tutorial() {
  return (
    <div className="tutorial-section">
      <h2>
        Our <span className="highlight">Tutorials</span>
      </h2>
      <p className="tutorial-description">
        Explore our comprehensive tutorials to learn how to use our tool effectively. Whether you're a beginner or an advanced user, we've got you covered.
      </p>
      {/* Use Link to navigate to the TutorialPage */}
      <Link to="/tutorials">
        <button className="see-all-button">See All</button>
      </Link>
    </div>
  );
}