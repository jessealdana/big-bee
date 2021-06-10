import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BeeHome from "./components/pages/BeeHome";
import BeeAlgo from "./components/pages/BeeAlgo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/big-bee" exact component={() => <BeeHome />} />
        <Route path="/beealgo" exact component={() => <BeeAlgo />} />
      </Switch>
    </Router>
  );
}

export default App;
