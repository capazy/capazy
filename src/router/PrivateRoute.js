import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';

const RouteWithLayout = (props) => {
  // const { user } = useContext(UserContext);
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={
        (matchProps) => (
          // !user ? (
          //   <Redirect to="/" />
          // ) : (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )
        // )
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
