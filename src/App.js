import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => (
  <Router>
    
    <Routes>
      <Route path="/menu" element={<Menu />} />
    </Routes>
    <LandingPage/>
    <Footer/>
  </Router>
  
);

export default App;
