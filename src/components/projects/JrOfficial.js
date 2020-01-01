import React from 'react';
import jrOfficialImg from '../../images/project-images/JrOfficial_home.png';

const JrOfficial = () => (
  <div className="project">
    <h3>JR Academy Official</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={jrOfficialImg} alt="jrOfficialImg" />
        {/* Buttons */}
        <div className="row mt-2 mb-5 text-center">
          <div className="col-md-6">
            <a
              href="https://www.jiangren.com.au/"
              target="_blank"
              type="button"
              rel="noopener noreferrer"
              className="btn btn-project"
            >
                View Project
            </a>
          </div>
          <div className="col-md-6">
            <button
              href=""
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-project"
              disabled
            >
                Source Private
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 project-description">
        <h4>
            The official website of JR Academy.
        </h4>
        <div className="project-info">
          <p>• Project Management: Jira, bitbucket</p>
          <p>
            • Front-end development: CSS3, Sass, Pug(Jade), JavaScript ES6,
              React.js, Redux, Bootstrap, jQuery, Responsive design
          </p>
          <p>
            • Back-end development: Node.js, MongoDB, KeystoneJs, Mongoose,
              RESTful API
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default JrOfficial;
