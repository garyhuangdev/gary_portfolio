import React from 'react';
import linkdevsImg from '../../images/project-images/Linkdevs_home.png';

const LinkDevs = () => (
  <div className="project">
    <h3>LinkDevs</h3>
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
              href="http://github.com/garyhuangdev/linkdevs"
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
      <div className="col-md-6 project-description">
        <h4>Social media for developers to share and connect</h4>
        <div className="project-info">
          <p>
            • Social media that enables users to register and create their own
            profiles includes their experience, education and skills. Users can
            connect with each other, share knowledge and help others.
          </p>
          <p>
            • Used CSS3, HTML5, JavaScript, React.js, React hooks, Redux, Redux
            thunk, Bootstrap, Responsive design for front-end development
          </p>
          <p>
            • Used Node.js, MongoDB, Express, Mongoose, RESTful API for back-end
            development. Used JWT for authentication
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LinkDevs;
