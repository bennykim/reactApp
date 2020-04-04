import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Todo from './components/Todo';
import Grid from './components/Grid';
import Modals from './components/Modals';
import Counter from './components/Counter';
import Async from './components/Async';
import Navigator from './components/Navigator';

import logo from './assets/logo.svg';
import './css/app.css';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigator />

          <Route
            exact
            path="/"
            component={Todo}
          />
          <Route
            component={Grid}
            path="/grid"
          />
          <Route
            component={Modals}
            path="/modals"
          />
          <Route
            path="/counter"
            component={Counter}
          />
          <Route
            path="/async"
            component={Async}
          />

          <img
            className="logo"
            src={logo}
            alt="React logo"
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
