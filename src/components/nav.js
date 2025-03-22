import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links-left">
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
      <div className="navbar-logo">
        <img src="/Image/Logo.png" alt="Logo" />
      </div>
      <div className="navbar-download">
        <button>Download</button>
      </div>
    </nav>
  );
};

export default Nav;