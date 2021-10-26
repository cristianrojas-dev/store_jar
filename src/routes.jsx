import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "./screen/Dashboard";

const routes = (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
  </Switch>
);

export default routes;
