import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import './styles/css/style.css';
import './styles/css/bootstrap.css';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <div className="container">
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
