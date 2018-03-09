import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#80CBC4',
      main: '#009688',
      dark: '#00796B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FFE0B2',
      main: '#FF9800',
      dark: '#EF6C00',
      contrastText: '#fff',
    },
  },
});

const root = document.getElementById('root');
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
    , root);
registerServiceWorker();
