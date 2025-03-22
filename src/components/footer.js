import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="custom-logo-container">
        <img src="/Image/whitelogo.png" alt="AutopyNet Logo" className="custom-logo" />
      </div>
      <nav className="custom-navbar">
        <ul className="custom-nav-links">
          <li>
            <Link to="/">Home</Link> {/* Link to Home Page */}
          </li>
          <li>
            <Link to="/tutorials">Tutorial</Link> {/* Link to Tutorial Page */}
          </li>
          <li>
            <Link to="/documentation">Documentation</Link> {/* Link to Documentation Page */}
          </li>
          <li>
            <a href="#faq">FAQ</a> {/* Keep as a regular link for now */}
          </li>
        </ul>
      </nav>
    </footer>
  );
}