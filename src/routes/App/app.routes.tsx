import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes, Route as TRoute } from 'types/Routes';

import Dashboard from './Dashboard';
import Financials from './Financials';

const ROUTES: Routes = {
  FINANCIALS: {
    path: '/app/financials',
    children: <Financials />,
    title: 'Financial',
  },
  DASHBOARD: {
    path: '/app/dashboard',
    children: <Dashboard />,
    title: 'Dashboard',
  },
};

const ROUTES_ARRAY: TRoute[] = Object.values(ROUTES).map((value) => value);
const AppRoutes = (): JSX.Element => {
  return (
    <Switch>
      {ROUTES_ARRAY.map((route) => (
        <Route key={`${route.path}`} path={`${route.path}`} exact>
          {route.children}
        </Route>
      ))}
      <Route>
        <Redirect to="/app/financials"></Redirect>
      </Route>
    </Switch>
  );
};

export default AppRoutes;
