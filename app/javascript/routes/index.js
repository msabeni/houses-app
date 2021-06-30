import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Houses from "../components/Houses/Houses";
import House from "../components/House/House";

export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Houses} />
      <Route exact path="/:slug" component={House} />
    </Switch>
  </Router>
);
