import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './App.css';
import Routes from '../../config/routes';
import Dashboard from '../Dashboard';

import { Router, Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
