import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./Context";
import App from "./App";
import JavaCoding from "./Components/StudyTime/javacoding";
import AddQuestionAns from "./Components/StudyTime/AddQuestionAns";
import react from "./Components/StudyTime/React";
import SpringFramework from "./Components/StudyTime/SpringFramework";
import angular from "./Components/StudyTime/Angular";

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <Switch>
        {/* Normal portfolio page */}
        <Route exact path="/" component={App} />

        {/* Study pages */}
        <Route path="/java" component={JavaCoding} />
        <Route path="/spring" component={SpringFramework} />
         <Route path="/react" component={react} />
         <Route path="/angular" component={angular} />
         <Route path="/sql" component={angular} />

        {/* Add Q&A for each subject */}
        <Route path="/add/:mode" component={AddQuestionAns} />
        
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
