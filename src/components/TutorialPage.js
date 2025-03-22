import React from 'react';
import './TutorialPage.css';

const TutorialPage = () => {
  return (
    <div className="tutorial-page">
      <h1>How to Use Our Tool</h1>
      <div className="video-grid">
        <div className="video-container">
          <h2>Getting Started</h2>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_1" // Replace with your video ID
            title="Getting Started Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-container">
          <h2>Advanced Features</h2>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_2" // Replace with your video ID
            title="Advanced Features Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-container">
          <h2>Troubleshooting</h2>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_3" // Replace with your video ID
            title="Troubleshooting Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-container">
          <h2>Customization</h2>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_4" // Replace with your video ID
            title="Customization Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;