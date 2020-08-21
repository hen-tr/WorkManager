import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import TeamUsers from '../pages/TeamUsers';
import CreateTeamUsers from '../pages/CreateTeamUsers';
import UserTeamDashboard from '../pages/UserTeamDashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route component={SignIn} path="/" exact />
    <Route component={SignUp} path="/signup" />
    <Route
      component={UserTeamDashboard}
      path="/userTeamDashboard/:id"
      isPrivate
    />
    <Route component={Dashboard} path="/dashboard" isPrivate />
    <Route component={TeamUsers} path="/teamUsers" isPrivate />
    <Route component={CreateTeamUsers} path="/createTeam" isPrivate />
  </Switch>
);
export default Routes;
