import React from "react";
import "./Experience.css";

import { themeContext } from "../../Context";
import { useContext } from "react";

export const Experience = () => {

  
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className={darkMode ? "newcircle" : "circle"}>3+</div>
        <span>years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className={darkMode ? "newcircle" : "circle"}>5+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className={darkMode ? "newcircle" : "circle"}>3+</div>
        <span>companies</span>
        <span>Works</span>
      </div>
    </div>
  );
};
