import React from 'react';
import jrDashboardImg from '../../images/project-images/JrDashboard-home.png';

const JrDashboard = () => (
  <div className="project">
    <h3>JR Academy Dashboard</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={jrDashboardImg} alt="jrDashboardImg" />
        {/* Buttons */}
        <div className="row mt-2 mb-5 text-center">
          <div className="col-md-6">
            <a
              href="https://learn.jiangren.com.au/"
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
            The dashboard for students and teachers of JR Academy.
        </h4>
        <div className="project-info">
          <p>• Project Management: Jira, bitbucket</p>
          <p>
              • Front-end development: CSS3, Less, HTML5, JavaScript ES6,
              React.js, Redux, Redux-Saga, React hooks, React Router, Bootstrap,
              Ant Design Pro, dva, Responsive design
          </p>
          <p>
              • Back-end development: Node.js, MongoDB, Mongoose, KeystoneJs,
              RESTful API
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default JrDashboard;
