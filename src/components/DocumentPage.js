import React from 'react';
import './DocumentPage.css';
import { FaDownload, FaSignInAlt, FaRocket, FaUserPlus, FaDesktop } from 'react-icons/fa';

const steps = [
  { icon: <FaDownload />, title: 'Download & Install', description: 'Download the application from our website and follow the installation instructions for your OS.' },
  { icon: <FaDesktop />, title: 'Launch the App', description: 'After installation, open the application from your desktop or applications menu.' },
  { icon: <FaUserPlus />, title: 'Sign In or Register', description: 'If you have an account, sign in. Otherwise, create a new account.' },
  { icon: <FaRocket />, title: 'Explore the Dashboard', description: 'Discover the features and tools available within the app.' },
  { icon: <FaSignInAlt />, title: 'Start Using', description: 'Follow on-screen instructions and explore advanced features in the documentation.' }
];

const DocumentPage = () => {
  return (
    <div className="document-container">
      <h1 className='documentheading'>How to Use Our Desktop Application</h1>
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">{step.icon}</div>
            <h2>{step.title}</h2>
            <p className='para'>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentPage;
