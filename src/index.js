import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./Context";
import App from "./App";
import JavaCoding from "./Components/StudyTime/javacoding";
import AddQuestionAns from "./Components/StudyTime/AddQuestionAns";
import SpringFramework from "./Components/StudyTime/SpringFramework";

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <Switch>
        {/* Normal portfolio page */}
        <Route exact path="/" component={App} />

        {/* Study pages */}
        <Route path="/java" component={JavaCoding} />
        <Route path="/spring" component={SpringFramework} />

        {/* Add Q&A for each subject */}
        <Route path="/add/:mode_question_ans" component={AddQuestionAns} />
        
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
