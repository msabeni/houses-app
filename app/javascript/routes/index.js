import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Houses from "../components/Houses/Houses";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Houses} />
    </Switch>
  </Router>
);