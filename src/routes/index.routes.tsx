import React, { useEffect, useState } from 'react';

import { Container } from '@material-ui/core';
import { Loading } from 'components/base';
import { APP_ROUTES, MAIN_ROUTES } from 'consts';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { Routes } from 'types/Routes';

import AppRoutes from './App/app.routes';
import Login from './Auth/Login';
import Register from './Auth/Register';

export const ROUTES: Routes = {
  ROOT: {
    path: MAIN_ROUTES.LANDING,
    children: <h1>Landing Page</h1>,
  },
  LOGIN: {
    path: MAIN_ROUTES.LOGIN,
    children: <Login />,
  },
  REGISTER: {
    path: MAIN_ROUTES.REGISTER,
    children: <Register />,
  },
  FORGOT_PASSWORD: {
    path: MAIN_ROUTES.FORGOT_PASSWORD,
    children: <h1>Forgot Password</h1>,
  },
  //nested routes
  APP: {
    path: APP_ROUTES.ROOT,
    children: <AppRoutes />,
    nested: true,
    protected: true,
  },
};

const RoutesComponent = (): JSX.Element => {
  const history = useHistory();
  const [isUserState, setUserState] = useState(false);
  // const location = useLocation();
  // const currentPath = location.pathname;
  const [user, loading, error] = useAuthState(firebase.auth());
  if (loading) {
    return <Loading />;
  }
  return (
    <Switch>
      {Object.values(ROUTES).map((route) => {
        return (
          <Route key={route.path} path={route.path} exact={!route.nested}>
            {!user && route.protected ? (
              <Redirect to={{ pathname: MAIN_ROUTES.LOGIN }} />
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
