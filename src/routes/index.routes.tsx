import React, { useEffect } from 'react';

import { APP_ROUTES, MAIN_ROUTES } from 'consts';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { Routes } from 'types/Routes';

export const ROUTES: Routes = {
  ROOT: {
    path: MAIN_ROUTES.LANDING,
  },
  APP_LOGIN: {
    path: APP_ROUTES.LOGIN,
  },
  //nested routes
  //     APP: {
  //       path:
  //   }
};

const RoutesComponent = (): JSX.Element => {
  const history = useHistory();
  const location = useLocation();
  const currentPath = location.pathname;
  const isAuthenticated = true; //will be used for authentication
  return (
    <Switch>
      {Object.values(ROUTES).map((route) => {
        return (
          <Route key={route.path} path={route.path} exact={!route.nested}>
            {!isAuthenticated && route.protected ? (
              <Redirect to={{ pathname: APP_ROUTES.LOGIN }} />
            ) : (
              route.children
            )}
          </Route>
        );
      })}
      <Route>
        <h1>404 route</h1>
      </Route>
    </Switch>
  );
};

export default RoutesComponent;
