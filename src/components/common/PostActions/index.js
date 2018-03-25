import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import InsertComment from 'material-ui-icons/InsertComment';
import ThumbUp from 'material-ui-icons/ThumbUp';
import Delete from 'material-ui-icons/Delete';
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
      <BottomNavigation
        value={action}
        onChange={this.handleChangeActions}
        showLabels>
        <BottomNavigationAction label={commentCount} icon={<InsertComment/>} classes={{ wrapper: classes.bottomNavigation}} />
        <BottomNavigationAction label={voteScore} icon={<ThumbUp/>} classes={{ wrapper: classes.bottomNavigation}} />
        <BottomNavigationAction icon={<Delete/>} classes={{ wrapper: classes.bottomNavigation}} />
      </BottomNavigation>
    );
  }
}

PostActions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostActions);
