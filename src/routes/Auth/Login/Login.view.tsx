import React from 'react';

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import firebase from 'firebase/app';
import config from 'Firebase/config';

import { FirebaseGoogleLogin } from '../../../Firebase/functions';
import { LoginGeneratedProps } from './Login.props';
import { Container } from './Login.style';

const LoginView = (props: LoginGeneratedProps) => {
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ user, providerId }) => (
          <>
            {providerId ? (
              <>
                {user && <p>Welcome {user.displayName}</p>}
                {!user && (
                  <>
                    <form onSubmit={() => {}}>
                      <input></input>
                      <button type="submit">Submit</button>
                    </form>
                    <button onClick={() => FirebaseGoogleLogin()}>
                      Login with Google
                    </button>
                  </>
                )}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </>
        )}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
};

export default LoginView;
