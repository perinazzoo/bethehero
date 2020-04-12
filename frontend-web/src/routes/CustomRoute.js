import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../contexts/AuthContext';

export default function CustomRoute({ isPrivate, component, path, exact }) {
  const { authenticated, loading } = useAuth();

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && authenticated) {
    return <Redirect to="/dashboard" />;
  }

  if (loading) {
    return null;
  }

  return <Route exact={exact} path={path} component={component} />;
}

CustomRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  isPrivate: PropTypes.bool,
};

CustomRoute.defaultProps = {
  exact: false,
  isPrivate: false,
};
