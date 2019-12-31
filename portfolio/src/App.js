import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import './styles/css/style.css';
import './styles/css/bootstrap.css';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Home />
      <Navbar />
      <div className="container">
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
