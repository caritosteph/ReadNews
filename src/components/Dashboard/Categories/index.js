import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';

import styles from './categories.styles';

const Categories = ({ categories, classes }) => (
  <Grid item xs={2}
        className={classes.categories}>
    <List component="nav"
          subheader={<ListSubheader component="div">Categories</ListSubheader>}>
        <ListItem button>
            <ListItemText inset primary="All" />
        </ListItem>
        <ListItem button>
            <ListItemText inset primary="Reactjs" />
        </ListItem>
    </List>
  </Grid>

)

Categories.propTypes = {

};

export default withStyles(styles)(Categories);
