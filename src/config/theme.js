import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#80cbc4',
      main: '#009688',
      dark: '#00796B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffe0b2',
      main: '#ff9800',
      dark: '#ef6C00',
      contrastText: '#fff',
    },
    common: {
      border: '#d8dbdb'
    }
  },
});

export default theme;
