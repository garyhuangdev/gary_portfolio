import React from 'react';
import Official from '../projects/Official';
import Dashboard from '../projects/Dashboard';
import Talent from '../projects/Talent';
import Linkdevs from '../projects/Linkdevs';
import Portfolio from '../projects/Portfolio';

const Projects = () => (
  <section className="projects">
    <div className="section-head">
      <h2 className="text-center">Projects</h2>
      <div className="underline" />
    </div>
    <Official />
    <Dashboard />
    <Talent />
    <Linkdevs />
    <Portfolio />
  </section>
);

export default Projects;
