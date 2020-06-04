import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        !token ? (
          <Redirect to="/login" />
        ) : (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )
      }
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
