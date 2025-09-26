import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Pramendra Singh</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <Link
                spy={true}
                to="Navbar"
                smooth={true}
                activeClass="activeClass"
              >
                <li  id="navlink">Home</li>
              </Link>

              <Link spy={true} to="Services" smooth={true}>
                <li id="navlink">Services</li>
              </Link>

              <Link spy={true} to="Experience" smooth={true}>
                <li id="navlink">Experience</li>
              </Link>
              <Link spy={true} to="Portfolio" smooth={true}>
                <li id="navlink">Portfolio</li>
              </Link>
              <Link spy={true} to="Testimonials" smooth={true}>
                <li id="navlink">Testimonials</li>
              </Link>
            </ul>
          </div>
          <Link spy={true} to="contact" smooth={true}>
            <button className="button n-button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
