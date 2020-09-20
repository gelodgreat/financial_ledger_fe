import React, { Component } from 'react';

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import firebase from 'firebase/app';
import config from 'Firebase/config';

import { FirebaseGoogleLogin } from '../Firebase/functions';

class Login extends Component {
  render() {
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
  }
}

export default Login;
