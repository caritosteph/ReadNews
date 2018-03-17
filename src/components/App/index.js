import React, { Component, Fragment } from 'react';
import Routes from '../../config/routes';
import Header from '../common/Header';
import Grid from 'material-ui/Grid';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes />
      </Fragment>
    );
  }
}

export default App;
