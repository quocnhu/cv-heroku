import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton.js';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="#">My Project</a>
      <ToggleButton />
    </nav>
  );
};

export default Navbar;