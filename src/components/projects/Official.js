import React from 'react';
import officialImg from '../../images/project-images/Official_home.png';

const Official = () => (
  <div className="project">
    <h3>JR Academy</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={officialImg} alt="officialImg" />
        <div className="row mt-2 mb-5 text-center">
          <div className="col-md-6">
            <a
              href="https://www.jiangren.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-project">
                View Project
              </button>
            </a>
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-disabled" disabled>
              Source Private
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 project__description">
        <h4>Official Website</h4>
        <div className="project__info">
          <p>• Project Management: Jira, bitbucket</p>
          <p>
            • Front-end development: CSS3, Sass, Pug(Jade), JavaScript ES6,
            React.js, Redux, Bootstrap, jQuery, Responsive design
          </p>
          <p>
            • Back-end development: Node.js, MongoDB, RESTful API
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Official;
