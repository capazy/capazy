import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './router/PrivateRoute';
import Route from './router/Route';

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
  Job,
  Loading,
} from './views';
import Layout from './layout';
import SimpleLayout from './layout/SimpleLayout';
import NoLayout from './layout/NoLayout';
import MobileChat from './views/MobileChat';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" layout={Layout} component={Home} />
      <Route exact path="/loading" layout={NoLayout} component={Loading} />
      <Route exact path="/signup" layout={Layout} component={Signup} />
      <Route exact path="/login" layout={Layout} component={Login} />
      <PrivateRoute
        exact
        path="/chat"
        layout={SimpleLayout}
        component={window.screen.width < '430' ? MobileChat : Chat}
      />
      <PrivateRoute
        exact
        path="/chat/:channelURL"
        layout={SimpleLayout}
        component={Chat}
      />
      <PrivateRoute
        exact
        path="/joined-projects"
        layout={Layout}
        component={JoinedProjects}
      />
      <PrivateRoute
        exact
        path="/created-projects"
        layout={Layout}
        component={CreatedProjects}
      />
      <PrivateRoute
        exact
        path="/project/create"
        layout={Layout}
        component={ProjectWizard}
      />
      <PrivateRoute exact path="/job/create" layout={Layout} component={Job} />
      <PrivateRoute
        exact
        path="/user/create"
        layout={Layout}
        component={UserForm}
      />
      <PrivateRoute
        exact
        path="/user/edit/:id"
        layout={Layout}
        component={UserForm}
      />
      <PrivateRoute
        exact
        path="/profile/me"
        layout={Layout}
        component={Profile}
      />

      <PrivateRoute
        exact
        path="/profile/:id"
        layout={Layout}
        component={Profile}
      />
      <PrivateRoute exact path="/feed" layout={Layout} component={Feed} />
      <PrivateRoute exact path="/search" layout={Layout} component={Search} />
      {/* 
      <Redirect
        to={{
          pathname: '/',
        }}
      /> */}
    </Switch>
  );
};

export default Routes;
