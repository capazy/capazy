import React from 'react';

import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './router/RouteWithLayout';

// Views
import {
  UserForm,
  Search,
  Home,
  Signup,
  Login,
  ProjectForm,
  VacancyForm,
  Profile,
  JoinedProjects,
  CreatedProjects,
} from './views';
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
      <RouteWithLayout
        exact
        path="/joined-projects"
        layout={Layout}
        component={JoinedProjects}
      />
      <RouteWithLayout
        exact
        path="/created-projects"
        layout={Layout}
        component={CreatedProjects}
      />
      <RouteWithLayout
        exact
        path="/project-form"
        layout={Layout}
        component={ProjectForm}
      />
      <RouteWithLayout
        exact
        path="/vacancy-form"
        layout={Layout}
        component={VacancyForm}
      />
      <RouteWithLayout exact path="/login" layout={Layout} component={Login} />
      <RouteWithLayout
        exact
        path="/user-form"
        layout={Layout}
        component={UserForm}
      />
      <RouteWithLayout
        exact
        path="/profile"
        layout={Layout}
        component={Profile}
      />
      <RouteWithLayout exact path="/" layout={Layout} component={Home} />
      <RouteWithLayout
        exact
        path="/search"
        layout={Layout}
        component={Search}
      />

      <Redirect
        to={{
          pathname: '/',
        }}
      />
    </Switch>
  );
};

export default Routes;
