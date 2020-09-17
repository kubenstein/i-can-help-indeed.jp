import React, { useEffect, useMemo, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import qs from "qs";
import HomeScreen from "@/components/screens/Home";
import AuthRequiredScreen from "@/components/screens/AuthRequiredScreen";

import "./global.scss";

const basicAuthSecretReverted = "sazcweinbukaj";

const App = () => {
  const [password, setPassword] = useState(() => {
    const passwordUrlParam = qs.parse(window.location.hash.split("?")[1]).password;
    const passwordLocalStorage = window.localStorage.getItem("indeed-password");
    return passwordUrlParam || passwordLocalStorage;
  });
  const isBasicAuthed = useMemo(() => password === basicAuthSecretReverted.split("").reverse().join(""), [password]);

  useEffect(() => {
    if (password) window.localStorage.setItem("indeed-password", password);
  }, [password]);

  return isBasicAuthed ? (
    <Router>
      <Switch>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  ) : (
    <AuthRequiredScreen onPasswordChange={setPassword} />
  );
};

export default App;
