import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "@/components/screens/Home";

import "./global.scss";

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  </Router>
);

export default App;
