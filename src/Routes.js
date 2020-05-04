import React from 'react';

import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './router/RouteWithLayout';

// Views
import { Landing, Test, Home, Signup, Login } from './views';
import Layout from './layout';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        exact
        path="/signup"
        layout={Layout}
        component={Signup}
      />
      <RouteWithLayout exact path="/login" layout={Layout} component={Login} />
      <RouteWithLayout
        exact
        path="/landing"
        layout={Layout}
        component={Landing}
      />
      <RouteWithLayout exact path="/" layout={Layout} component={Home} />
      <RouteWithLayout exact path="/test" layout={Layout} component={Test} />

      <Redirect
        to={{
          pathname: '/',
        }}
      />
    </Switch>
  );
};

export default Routes;
