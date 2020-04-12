import React from 'react';
import { Switch, Router } from 'react-router-dom';

import history from '../services/history';

import CustomRoute from './CustomRoute';

import Logon from '../pages/Logon';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import NewIncident from '../pages/NewIncident';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <CustomRoute exact path="/" component={Logon} />
        <CustomRoute path="/register" component={SignUp} />

        <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
        <CustomRoute path="/incidents/new" component={NewIncident} isPrivate />
      </Switch>
    </Router>
  );
}
