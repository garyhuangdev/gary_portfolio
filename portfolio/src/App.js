import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import "./styles/css/style.css";
import './styles/css/bootstrap.css';
import Projects from "./components/pages/Projects";
import Skills from './components/pages/Skills';

function App() {
  return (
    <React.Fragment>
      <Home />      
      <Navbar />
      <div className='container'>
        <Projects />
        <Skills />
      </div>
    </React.Fragment>
  );
}

export default App;
