import React from 'react';
import linkdevsImg from '../../images/project-images/Linkdevs_home.jpg';

const Linkdevs = () => (
  <div className="project">
    <h3>Linkdevs</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={linkdevsImg} alt="linkdevsImg" />
        <div className="row mt-2 mb-5 text-center">
          <div className="col-md-6">
            <a
              href="http://linkdevs.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-project">
                View Project
              </button>
            </a>
          </div>
          <div className="col-md-6">
            <a
              href="https://github.com/garyhuangdev/linkdevs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-project">
                View Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 project__description">
        <h4>Social media for developers.</h4>
        <div className="project__info">
          <p>
            • This social website allows developers to maintain their profiles, 
            share ideas, knowledge, and link each other.
          </p>
          <p>
            • Front-end development: React, redux, CSS3, HTML5, JavaScript ES6,
            Bootstrap, Responsive design
          </p>
          <p>• Back-end development: Node.js, RESTful API, JWT, MongoDB</p>
        </div>
      </div>
    </div>
  </div>
);

export default Linkdevs;
