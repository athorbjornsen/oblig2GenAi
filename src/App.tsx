import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './Components/MainPageFolder/MainPage';
import Overview from './Components/OverviewFolder/Overview';

import Footer from './Components/FooterFolder/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div id="root">
        <nav className="navbar">
          <h1>GenAI</h1>
          <div className="links">
            <Link to="/news">News</Link>
            <Link to="/green">Green</Link>            
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<MainPage />} />
          <Route path="/green" element={<Overview />} />         
        </Routes>

        
      </div>
    <Footer />  
    </Router>
  );
};

export default App;
