import React from 'react';

const Skills = () => (
  <section className="skills">
    <div className="section-head">
      <h2 className="text-center">Skills</h2>
      <div className="underline" />
    </div>
    <div className="row">
      <div className="col-md-10 mx-auto">
        {/* Tech Skills */}
        <h3>Tech Skills</h3>
        <p>
          • Front-End Development: React.js, Redux, Redux-Saga, CSS3, Sass,
          Less, HTML5, Pug(Jade), JavaScript(ES6+), AJAX, React Context API, React
          Hooks, Ant.design, Bootstrap, Material UI, styled-components, Responsive
          design, Webpack
        </p>
        <p>
          • Back-End Development: Node.js, ExpressJS, Mongoose, RESTful API,
          KeystoneJS, PHP
        </p>
        <p>• Database design and management: MySQL, MongoDB, PostgreSQL</p>
        <p>
          • Coding Languages: CSS3, HTML5, JavaScript, Python, SQL, PHP
        </p>
        <p>• Cloud: AWS S3, EC2, Heroku, MongoDB Atlas</p>
        <p>
          • Testing: Jest, Enzyme, Mocha
        </p>
        {/* Teamwork Skills */}
        <h3>Teamwork Skills</h3>
        <p>• Tool: Git, AWS, NPM, Webpack, Bitbucket, JIRA, Postman, ESLint, Prettier, Autoprefixer</p>
        <p>• Methodology: BDD, TDD, CI/CD, Agile/Scrum</p>
      </div>
    </div>
  </section>
);

export default Skills;
