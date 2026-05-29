import React from "react";
import { Link } from "react-router-dom";
import "./StudyTime.css";



const StudyTime = () => {
  return (
    <div className="studytime-ribbon">
      <div className="studytime-left">
        <h3>Study Resources</h3>
        
      </div>
      <div className="studytime-right">
        <Link to="/java">
          <button className="lang-btn">Java</button>
        </Link>
        <button className="lang-btn">HTML</button>
        <button className="lang-btn">CSS</button>
        <button className="lang-btn">JavaScript</button>
        <button className="lang-btn">Python</button>
        <button className="lang-btn">C++</button>
      </div>
    </div>
  );
};

export default StudyTime;
