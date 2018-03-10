import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

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

export default theme;
