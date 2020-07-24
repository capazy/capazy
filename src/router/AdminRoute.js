import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { LoadingCard } from '../components';

const AdminRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  const { user } = useContext(UserContext);
  if (!user) return <p>Loading...</p>;
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        user.role !== 'recruiter' ? (
          // false ? (
          <Redirect to="/" />
        ) : (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )
      }
    />
  );
};

AdminRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default AdminRoute;
