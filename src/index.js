import React from 'react';
import ReactDOM from 'react-dom';
import Reboot from 'material-ui/Reboot';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App/App';
import theme from './config/theme';
import store from './config/store';
import routes from './config/routes';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <Reboot />
        <App />
      </MuiThemeProvider>
  </Provider>
  , root);

registerServiceWorker();
