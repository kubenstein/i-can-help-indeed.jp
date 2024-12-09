import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "@/components/screens/Home";
import StoryScreen from "@/components/screens/Story";
import GameScreen from "@/components/screens/Game";
import TechnicalDocumentationScreen from "@/components/screens/TechnicalDocumentation";

import "./global.scss";

const App = () => (
  <Router>
    <Switch>
      <Route path="/story">
        <StoryScreen />
      </Route>
      <Route path="/game">
        <GameScreen />
      </Route>
      <Route path="/technical-documentation">
        <TechnicalDocumentationScreen />
      </Route>
      <Route path="/">
        <HomeScreen />
      </Route>
    </Switch>
  </Router>
);

export default App;
