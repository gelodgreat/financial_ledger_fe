import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import Routes from 'routes/index.routes';
import { history } from 'store';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      {/* 
      For Redux usage
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter> */}
    </React.StrictMode>
  );
}

export default App;
