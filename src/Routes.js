import React from 'react';

import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './router/RouteWithLayout';

// Views
import {
  UserForm,
  Search,
  Feed,
  Home,
  Signup,
  Login,
  Profile,
  JoinedProjects,
  CreatedProjects,
  Chat,
  ProjectWizard,
} from './views';
import Layout from './layout';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout exact path="/chat" layout={Layout} component={Chat} />
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
        path="/project/create"
        layout={Layout}
        component={ProjectWizard}
      />

      <RouteWithLayout exact path="/login" layout={Layout} component={Login} />
      <RouteWithLayout
        exact
        path="/user/create"
        layout={Layout}
        component={UserForm}
      />
      <RouteWithLayout
        exact
        path="/user/edit/:id"
        layout={Layout}
        component={UserForm}
      />
      <RouteWithLayout
        exact
        path="/profile/me"
        layout={Layout}
        component={Profile}
      />

      <RouteWithLayout
        exact
        path="/profile/:id"
        layout={Layout}
        component={Profile}
      />
      <RouteWithLayout exact path="/" layout={Layout} component={Home} />
      <RouteWithLayout exact path="/feed" layout={Layout} component={Feed} />
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
