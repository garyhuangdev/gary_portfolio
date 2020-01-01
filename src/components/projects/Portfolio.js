import React from 'react';
import portfolioImg from '../../images/project-images/Portfolio_home.png';

const Portfolio = () => (
  <div className="project">
    <h3>Portfolio</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={portfolioImg} alt="portfolioImg" />
        <div className="row mt-2 mb-5 text-center">
          <div className="col-md-6">
            <button
              href="https://localhost:3000/"
              target="_blank"
              type="button"
              rel="noopener noreferrer"
              className="btn btn-project"
            >
                View Project
            </button>
          </div>
          <div className="col-md-6">
            <button
              href="https://github.com/garyhuangdev/gary_portfolio"
              target="_blank"
              type="button"
              rel="noopener noreferrer"
              className="btn btn-project"
            >
                View Code
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 project-description">
        <h4>
            My personal website.
        </h4>
        <div className="project-info">
          <p>
            • Used CSS3, Sass, HTML5, JavaScript, React.js,
            Bootstrap, Responsive design for front-end development
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
