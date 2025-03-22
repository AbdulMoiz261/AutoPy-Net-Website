import React from 'react';
import './download.css';
// import logo from '../Image/logo.png';
// import windowsIcon from '../Image/windows.png';
// import macIcon from '../Image/mac.png';
// import linuxIcon from '../Image/linux.png';

export default function Download() {
  return (
    <div className="download-section">
      
      {/* Banner Section */}
      <div className="download-banner">
  <div className="banner-content">
    {/* Original Content */}
    <h2>"Download our tool by simply clicking the button"</h2>
    <button className="banner-download-button">Download</button>
    <h2>"Download our tool by simply clicking the button"</h2>
    <button className="banner-download-button">Download</button>

    {/* Duplicated Content */}
    <h2>"Download our tool by simply clicking the button"</h2>
    <button className="banner-download-button">Download</button>
    <h2>"Download our tool by simply clicking the button"</h2>
    <button className="banner-download-button">Download</button>
  </div>
</div>
      
      {/* Main Download Box */}
      <div className="download-box">
        <img src="/Image/logoicon.png" alt="Product Logo" className="product-logo" />
        <h1>AutoPy Net 2024</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit velit repudiandae voluptatibus rerum!</p>
        
        {/* Platform Icons */}
        {/* <div className="platform-icons">
          <img src={windowsIcon} alt="Windows" />
          <img src={macIcon} alt="Mac" />
          <img src={linuxIcon} alt="Linux" />
        </div> */}
        
        {/* Download Button */}
        <button className="download-button1">Download</button>
      </div>
    </div>
  );
}
