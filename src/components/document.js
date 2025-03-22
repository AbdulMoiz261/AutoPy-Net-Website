import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Document.css';

export default function Document() {
  return (
    <div className="document-section">
      <div className="document-content">
        <h3>Fully Documented</h3>
        <h1>Documentation</h1>
        <p>
          Detailed documentation covering all the ins and outs of your theme. Use it to squeeze the most out of your website's functionality.
        </p>
        {/* Use Link to navigate to the DocumentPage */}
        <Link to="/documentation">
          <button className="read-more-button">Read More</button>
        </Link>
      </div>
      <div className="document-image">
        <img src="/Image/documents.png" alt="Documentation Icon" />
      </div>
    </div>
  );
}