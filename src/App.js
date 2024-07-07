import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import About from './components/About';
//import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => (
  <Router>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<Footer />} />
      <Route path="/contact" element={<Footer/>} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
    
    <Footer/>
  </Router>
  
);

export default App;
