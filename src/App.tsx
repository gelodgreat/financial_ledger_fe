import React, { Component } from 'react';

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import { ConnectedRouter } from 'connected-react-router';
import firebase from 'firebase/app';
import config from 'Firebase/config';
import {
  Switch,
  Route,
  withRouter,
  BrowserRouter,
  Router,
} from 'react-router-dom';
import Routes from 'routes/index.routes';
import { history } from 'store';

import './App.css';

interface Props {}

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
