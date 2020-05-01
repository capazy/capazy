import React from "react";

import { Switch, Redirect } from "react-router-dom";

import RouteWithLayout from "./router/RouteWithLayout";

// Views
import { Landing, Test } from "./views";
import Main from "./layout/Main";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path='/' layout={Main} component={Landing} />
      <RouteWithLayout exact path='/test' layout={Main} component={Test} />

      <Redirect
        to={{
          pathname: "/",
        }}
      />
    </Switch>
  );
};

export default Routes;
