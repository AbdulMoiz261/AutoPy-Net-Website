import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav'; // Adjust the path if needed
import Download from './components/download';
import Tutorial from './components/tutorial';
import Document from './components/document';
import Footer from './components/footer';
import TutorialPage from './components/TutorialPage'; // Import the TutorialPage component
import DocumentPage from './components/DocumentPage'; // Import the DocumentPage component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* Nav is outside Routes to appear on all pages */}

        <Routes>
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <div className="mainheading">AutoPy Net</div>
                <div className="man">
                  <img src="/Image/man.png" alt="man" />
                </div>
                <Download />
                <Tutorial />
                <Document />
              </>
            }
          />

          {/* Tutorial Page Route */}
          <Route path="/tutorials" element={<TutorialPage />} />

          {/* Documentation Page Route */}
          <Route path="/documentation" element={<DocumentPage />} />
        </Routes>

        <Footer /> {/* Footer is outside Routes to appear on all pages */}
      </div>
    </Router>
  );
}

export default App;