import React, { Component } from 'react';

import config from 'common/config';
import { ConnectedRouter } from 'connected-react-router';
import firebase from 'firebase/app';
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

import 'firebase/auth';
import 'firebase/database';
interface Props {}
firebase.initializeApp(config);

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
