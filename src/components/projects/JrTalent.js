import React from 'react';
import jrTalentImg from '../../images/project-images/JrTalent_home.png';

const JrTalent = () => (
  <div className="project">
    <h3>JR Talent</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={jrTalentImg} alt="jrTalentImg" />
        <div className="row mt-2 mb-5 text-center">
          <div className="col-md-6">
            <a
              href="https://jrtalent.com.au/"
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
      <div className="col-md-6 project-description">
        <h4>Technical employment marketplace website.</h4>
        <div className="project-info">
          <p>
            • An employment marketplace website that provides technical related
            jobs information. Helping both employers and employees to find ideal
            candidate or position.
          </p>
          <p>
            • Front-end development: CSS3, Sass, HTML5, JavaScript ES6,
            Bootstrap, Responsive design
          </p>
          <p>• Back-end development: Node.js, Koa, docker, RESTful API</p>
        </div>
      </div>
    </div>
  </div>
);

export default JrTalent;
