import React from 'react';
import resume from '../../resume/Gary Huang_Full Stack Developer.pdf';

const Home = () => (
  <section className="home">
    <div className="home__background" />
    <div className="home__content">
      <p className="home__intro">Hi, nice to meet you, I am</p>
      <h1 className="home__title">Gary Huang</h1>
      <h3 className="home__intro">
        Full-stack Developer | Front-end Developer
      </h3>
      <div className="home__icon">
        <a
          href="https://www.linkedin.com/in/garyhuang-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Linkedin</span>
        </a>
        <a
          href="https://github.com/garyhuangdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Github</span>
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <span>Resume</span>
        </a>
        <a
          href="https://medium.com/@garyncookie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Blog</span>
        </a>
      </div>
    </div>
  </section>
);

export default Home;
