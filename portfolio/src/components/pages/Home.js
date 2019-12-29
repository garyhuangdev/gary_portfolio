import React from 'react';
import { Button, Modal } from "react-bootstrap";


const Home = () => {
    return (
      <section className='home'>
        <div className='home-background'></div>
        <div className='home-content'>
          <p className='home__intro'>Hi, nice to meet you, I am</p>
          <h1 className='home__title'>Gary Huang</h1>
          <h3 className='home__intro'>
            Full-stack Developer | Front-end Developer
          </h3>
          <div className='home__intro'>
            <a
              href='https://www.linkedin.com/in/yiping-niu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Linkedin</span>
            </a>
            <a
              href='https://github.com/Nndouu'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>Github</span>
            </a>
            <a href='#!'>
              <span>Email</span>
            </a>
            <a target='_blank' rel='noopener noreferrer' href="/">
              <span>Resume</span>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;
  