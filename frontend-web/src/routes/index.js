import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logon from '../pages/Logon';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import NewIncident from '../pages/NewIncident';

import { isAuthenticated } from '../services/auth';

function PrivateRoute({ component: Component, path, exact }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (isAuthenticated() ? <Component /> : <Redirect to="/" />)}
    />
  );
}

function GuestRoute({ component: Component, path, exact }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        !isAuthenticated() ? <Component /> : <Redirect to="/dashboard" />
      }
    />
  );
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <GuestRoute exact path="/" component={Logon} />
        <GuestRoute path="/register" component={SignUp} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}

GuestRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

GuestRoute.defaultProps = {
  exact: false,
};

PrivateRoute.defaultProps = {
  exact: false,
};
