import React from 'react';
import JrOfficial from '../projects/JrOfficial';
import JrDashboard from '../projects/JrDashboard';
import Portfolio from '../projects/Portfolio';

const Projects = () => (
  <section className="projects">
    <div className="section-head">
      <h2 className="text-center">Projects</h2>
      <div className="underline" />
    </div>
    {/* Project JR Academy official site */}
    <JrOfficial />
    {/* Project JR Academy dashboard */}
    <JrDashboard />
    {/* Project Portfolio */}
    <Portfolio />
  </section>
);

export default Projects;
