import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="footer-wave" className="footer-wave" />

      <div className="footer-container">
        {/* About Section */}
        <div className="footer-col">
          <h3>About</h3>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:pramendra10000@gmail.com">spramendra50@gmail.com</a></p>
          <p>Phone: +91-8928391***</p>
          <p>Location: Mumbai, India</p>
        </div>

        {/* Social Section */}
        <div className="footer-col">
          <h3>Connect</h3>
          <div className="f-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github color="white" size="2.5rem" />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin color="white" size="2.5rem" />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Insta color="white" size="2.5rem" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pramendra Singh | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
