

import React from "react";
import { Link } from "react-router-dom"; import "./StudyTime.css";

const StudyTime = () => {
   return (
     <div className="studytime-section">
       <div className="studytime-header">
         <span>Study</span>
         <span>Resources</span>
       </div>
       <div className="studytime-ribbon">
         <div className="studytime-left">
           <span>📚</span>
           <h3>Pick a Language</h3>
         </div>
         <div className="studytime-right">
           <Link to="/java">
             <button className="lang-btn">☕ Java</button>
           </Link>
           <Link to="/spring">
             <button className="lang-btn">🥬 Spring Framework</button>
           </Link>
           <button className="lang-btn">🌐 HTML</button>
           <button className="lang-btn">🎨 CSS</button>
           <button className="lang-btn">⚡ JavaScript</button>
           <button className="lang-btn">🐍 Python</button>
           <button className="lang-btn">⚙️ C++</button>
         </div>
       </div>
     </div>
   );
};

export default StudyTime;
