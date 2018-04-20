import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import styles from './notFound.styles';

const Header = ({ classes }) => (
  <Grid 
  	container 
  	spacing={0} 
  	justify="center" 
  	alignContent="center" 
  	className={classes.grid}>
      <Typography variant="title" color="inherit">
        400 not found
      </Typography>
  </Grid>
)

export default withStyles(styles)(Header);
