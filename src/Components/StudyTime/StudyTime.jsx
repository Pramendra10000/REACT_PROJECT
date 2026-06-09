

import React from "react";
import { Link } from "react-router-dom"; import "./StudyTime.css";

    import { themeContext } from "../../Context"; 
      import { useContext } from "react";


const StudyTime = () => {
  const theme = useContext(themeContext);
     const darkMode = theme.state.darkMode;
   return (
     <div className="studytime-section">
       <div className="studytime-header">
         <span style={{ color: darkMode ? "white" : "" }}>Study</span>
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
           <Link to="/react">
             <button className="lang-btn">⚛️  React js</button>
           </Link>
           <Link to="/angular">
             <button className="lang-btn">🅰️ Angular</button>
           </Link>
            <Link to="/sql">
             <button className="lang-btn">💾 MSSQL</button>
           </Link>
            <Link to="/excel">
             <button className="lang-btn">📊 Excel</button>
           </Link>
            <Link to="/javascript">
             <button className="lang-btn">⚡ JavaScript</button>
           </Link>
            <Link to="/kafka">
             <button className="lang-btn">🔗 Kafka & ⚓ Kubernetes</button>
           </Link>
            <Link to="/azure">
             <button className="lang-btn">☁️🔄 Azure CI/CD</button>
           </Link>
            <Link to="/python">
             <button className="lang-btn">🐍 Python</button>
           </Link>
            <Link to="/htmlcss">
             <button className="lang-btn">🌐 HTML | 🎨 CSS</button>
           </Link>
           <button className="lang-btn">⚙️ C++</button>
         </div>
       </div>
     </div>
   );
};

export default StudyTime;
