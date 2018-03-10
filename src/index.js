import React from 'react';
import ReactDOM from 'react-dom';
import Reboot from 'material-ui/Reboot';
import { MuiThemeProvider } from 'material-ui/styles';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';
import theme from './config/theme';

const root = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
      <Reboot />
      <App />
    </MuiThemeProvider>
    , root);

registerServiceWorker();
