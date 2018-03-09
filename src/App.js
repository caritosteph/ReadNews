import React, { Component } from 'react';
import Button from 'material-ui/Button';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button variant="raised" color="primary">
            Hello World
          </Button>
          <Button variant="raised" color="secondary">
            See you
          </Button>
        </p>
      </div>
    );
  }
}

export default App;
