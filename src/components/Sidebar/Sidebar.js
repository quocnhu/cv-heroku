import React from 'react';
import '../Sidebar/Sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHouse,
  faUser,
  faFile,
  faImages,
  faServer,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../assets/avatar.jpg'; // Update this path as needed


const Sidebar = () => {
  return (
    <div className="main-sidebar d-flex flex-column align-items-center">
      <div className="profile-img">
        <img src={Avatar} alt="" className="m-avatar" />
      </div>

      <a href="index.html" className="identity">
        <h1 className="sitename">Nguyễn Quốc Nhu</h1>
      </a>

      <div className="social-links d-flex justify-content-center">
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <div id="navmenu" className="navmenu mt-4 w-100">
        <ul className="nav flex-column text-center">
          <li className="nav-item">
            <a href="#hero" className="nav-link active">
              <FontAwesomeIcon icon={faHouse} className="navicon" /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              <FontAwesomeIcon icon={faUser} className="navicon" /> About
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link">
              <FontAwesomeIcon icon={faFile} className="navicon" /> Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              <FontAwesomeIcon icon={faImages} className="navicon" /> Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              <FontAwesomeIcon icon={faServer} className="navicon" /> Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} className="navicon" /> Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
