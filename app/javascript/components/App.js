import React from "react";
import { Route, Switch } from "react-router-dom";
import Houses from "./Houses/Houses";
import House from "./House/House";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Houses} />
      <Route exact path="/houses:slug" component={House} />
    </Switch>
  );
};

export default App;
