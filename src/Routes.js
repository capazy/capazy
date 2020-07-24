import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './router/PrivateRoute';
import Route from './router/Route';

// context
import { UserContext } from './context/UserContext';

// Views
import {
  UserForm,
  Search,
  Feed,
  Home,
  Home_es,
  Signup,
  Login,
  Profile,
  Chat,
  Project,
  Job,
  Loading,
  Help,
  CreatedProjects,
  JoinedProjects,
  Dashboard,
} from './views';
import Layout from './layout';
import SimpleLayout from './layout/SimpleLayout';
import NoLayout from './layout/NoLayout';
import MobileChat from './views/MobileChat';
import AdminRoute from './router/AdminRoute';

const Routes = () => {
  const { language } = useContext(UserContext);

  return (
    <Switch>
      {/* ADMIN */}
      <AdminRoute
        exact
        path="/dashboard"
        layout={Layout}
        component={Dashboard}
      />
      {/* ADMIN */}

      <Route exact path="/jobs" layout={Layout} component={Feed} />
      <Route exact path="/search" layout={Layout} component={Search} />
      <Route exact path="/help" layout={Layout} component={Help} />
      <Route exact path="/loading" layout={NoLayout} component={Loading} />
      <Route
        exact
        path="/"
        layout={Layout}
        component={language === 'en' ? Home : Home_es}
      />
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
        path="/project/create"
        layout={Layout}
        component={Project}
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
