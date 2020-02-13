import React from 'react';
import DashboardImg from '../../images/project-images/Dashboard-home.png';

const Dashboard = () => (
  <div className="project">
    <h3>Student Management System</h3>
    <div className="row">
      <div className="col-md-6">
        <img src={DashboardImg} alt="DashboardImg" />
        <div className="row mt-2 mb-5 text-center">
          <div className="col-md-6">
            <a
              href="https://learn.jiangren.com.au/"
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
        <h4>Internal management system.</h4>
        <div className="project__info">
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

export default Dashboard;
