import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import InsertComment from 'material-ui-icons/InsertComment';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Delete from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import styles from './postAction.styles';

class PostActions extends React.Component {
  state = {
    action: -1
  };

  handleChangeActions = (event, action) => {
    this.setState({ action });
  };

  render() {
    const { classes, commentCount, voteScore } = this.props;
    const { action } = this.state;

    return (
      <Fragment>
        <IconButton className={classes.iconButton}>
          <Delete />
        </IconButton>
        <Grid container spacing={0} justify="center" alignItems="center">
          <IconButton className={classes.iconButton}>
            <ThumbUp />
          </IconButton>
          { voteScore }
          <IconButton className={classes.iconButton}>
            <ThumbDown />
          </IconButton>
        </Grid>
        <IconButton className={classes.iconButton}>
          <InsertComment /> 
        </IconButton>
        { commentCount }
      </Fragment>
    );
  }
}

PostActions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostActions);
