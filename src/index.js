import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./Context";
import App from "./App";
import JavaCoding from "./Components/StudyTime/javacoding"; // ✅ your Java page

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <Switch>
        {/* Normal portfolio page */}
        <Route exact path="/" component={App} />

        {/* Java study page */}
        <Route path="/java" component={JavaCoding} />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
