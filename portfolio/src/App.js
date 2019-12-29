import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import "./styles/css/style.css";
import './styles/css/bootstrap.css';
import Skills from './components/pages/Skills';

function App() {
  return (
    <React.Fragment>
      <Home />      
      <Navbar />
      <Skills />
      <Skills />
      <Skills />
    </React.Fragment>
  );
}

export default App;
