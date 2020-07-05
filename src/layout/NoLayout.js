import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NoLayout = (props) => {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
};
NoLayout.propTypes = {
  children: PropTypes.node,
};

export default NoLayout;
