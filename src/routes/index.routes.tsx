import React, { useEffect } from 'react';

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import { APP_ROUTES, MAIN_ROUTES } from 'consts';
import firebase from 'firebase';
import config from 'Firebase/config';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { Routes } from 'types/Routes';

import Login from './Auth/Login';

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
    children: <h1>Register</h1>,
  },
  FORGOT_PASSWORD: {
    path: MAIN_ROUTES.FORGOT_PASSWORD,
    children: <h1>Forgot Password</h1>,
  },
  //nested routes
  //     APP: {
  //       path:
  //   }
};

const RoutesComponent = (): JSX.Element => {
  const history = useHistory();
  // const location = useLocation();
  // const currentPath = location.pathname;
  return (
    <Switch>
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <FirebaseAuthConsumer>
          {({ user, providerId }) => (
            <>
              {Object.values(ROUTES).map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={!route.nested}
                  >
                    {!user && !providerId ? (
                      <Redirect to={{ pathname: MAIN_ROUTES.LANDING }} />
                    ) : (
                      route.children
                    )}
                  </Route>
                );
              })}
            </>
          )}
        </FirebaseAuthConsumer>
      </FirebaseAuthProvider>
      <Route>
        <h1>404 route</h1>
      </Route>
    </Switch>
  );
};

export default RoutesComponent;
