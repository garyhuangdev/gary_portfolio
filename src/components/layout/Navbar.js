import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => (
  <section className="nav">
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav m-auto">
          <li className="nav-item mx-3">
            <Link
              activeClass="active"
              to="home"
              spy
              smooth
              duration={500}
              className="nav-link"
            >
                Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              activeClass="active"
              to="projects"
              spy
              smooth
              duration={500}
              className="nav-link"
            >
                Projects
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              activeClass="active"
              to="skills"
              spy
              smooth
              duration={500}
              className="nav-link"
            >
                Skills
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link
              activeClass="active"
              to="contact"
              spy
              smooth
              duration={500}
              className="nav-link"
            >
                Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
);

export default Navbar;
