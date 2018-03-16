import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import styles from './header.styles';

const Header = ({ classes }) => (
  <AppBar position="static">
    <Toolbar classes={{ root: classes.toolbar}}>
      <Typography variant="title" color="inherit">
        ReadNews
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header);
