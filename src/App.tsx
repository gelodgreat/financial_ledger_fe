import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Login from './components/Login';
import {FirebaseAuthProvider, FirebaseAuthConsumer} from '@react-firebase/auth';
import firebase from 'firebase/app';
import config from 'Firebase/config';
import {FirebaseGoogleLogin} from './Firebase/functions';

import logo from './logo.svg';
import './App.css';

interface Props{

}

class App extends Component{

  render(){
    console.log(this);
    return(
      <Switch>

        <FirebaseAuthProvider {...config} firebase={firebase}>
          <FirebaseAuthConsumer>
            {({user, providerId})=>
            <>
              {providerId ? 
              (
              <>
              {!user &&(
                <Route
                  render={routeProps=><Login/>}
                />
              )}
              {user &&(
                <Route
                render={routeProps=><Route
                  render={routeProps=><div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn React
                    </a>
                  </header>
                </div>}
                />}
              />
              )}
              </>) : (<p>Loading...</p>)}
            </>
            }

          </FirebaseAuthConsumer>
        </FirebaseAuthProvider>
      </Switch>
    );
  }
}

export default App;