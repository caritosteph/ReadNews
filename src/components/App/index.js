import React, { Component, Fragment } from 'react';
import Routes from '../../config/routes';
import Header from '../common/Header';

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
