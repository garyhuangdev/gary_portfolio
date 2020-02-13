import React from 'react';
import Official from '../projects/Official';
import Dashboard from '../projects/Dashboard';
import Portfolio from '../projects/Portfolio';
import Talent from '../projects/Talent';

const Projects = () => (
  <section className="projects">
    <div className="section-head">
      <h2 className="text-center">Projects</h2>
      <div className="underline" />
    </div>
    <Official />
    <Dashboard />
    <Talent />
    <Portfolio />
  </section>
);

export default Projects;
