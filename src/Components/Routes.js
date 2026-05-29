import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import JavaCoding from "./Components/StudyTime/JavaCoding";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/java" component={JavaCoding} />
      </Switch>
    </Router>
  );
}

export default Routes;
