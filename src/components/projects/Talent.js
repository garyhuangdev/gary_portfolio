import React from 'react';
import talentImg from '../../images/project-images/Talent_home.png';

const Talent = () => (
  <div className="project">
    <h3>JR Talent</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={talentImg} alt="talentImg" />
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
      <div className="col-md-6 project__description">
        <h4>Technical marketplace website.</h4>
        <div className="project__info">
          <p>
            • An employment marketplace website that provides technical related
            jobs information. Helping both employers and employees to find ideal
            candidate or position.
          </p>
          <p>
            • Front-end development: CSS3, Sass, HTML5, JavaScript ES6,
            Bootstrap, Responsive design
          </p>
          <p>• Back-end development: Node.js, RESTful API, MongoDB</p>
        </div>
      </div>
    </div>
  </div>
);

export default Talent;
