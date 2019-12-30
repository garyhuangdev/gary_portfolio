import React from 'react';
import portfolioImg from "../../images/project-images/Portfolio_home.png";

const Portfolio = () => {
  return (
    <div className='project'>
      <h3>Portfolio</h3>
      <div className='row'>
        <div className='col-md-6'>
            <img src={portfolioImg} alt='portfolioImg'/ >
          {/* Buttons */}
          <div className='row mt-2 mb-5 text-center'>
            <div className='col-md-6'>
              <a
                href='https://localhost:3000/'
                target='_blank'
                type="button" 
                rel='noopener noreferrer' 
                className="btn btn-project"
              >
                View Project
              </a>
            </div>
            <div className='col-md-6'>
              <button 
                href=''
                type="button" 
                target='_blank'
                rel='noopener noreferrer' 
                className="btn btn-project"
                disabled
                >Source Private</button>
            </div>
          </div>
        </div>
        <div className='col-md-6 project-description'>
          <h4>
            My personal website.
          </h4>
          <div className='project-info'>
            <p>
            • Used CSS3, Sass, HTML5, JavaScript, React.js, 
            Bootstrap, Responsive design for front-end development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
