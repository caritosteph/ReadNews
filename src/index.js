import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import theme from './config/theme';
import store from './config/store';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </MuiThemeProvider>
  </Provider>
  , root);

registerServiceWorker();
