import React from 'react';
import { Link } from "react-scroll";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className='container'>
        <ul className='navbar-nav m-auto'>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Projects
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Skills
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
