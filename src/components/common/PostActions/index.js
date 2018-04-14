import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import InsertComment from 'material-ui-icons/InsertComment';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Delete from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import { fetchDeletePost } from '../../../actions/posts.js';
import styles from './postAction.styles';

class PostActions extends React.Component {
  state = {
    action: -1
  };

  handleChangeActions = (event, action) => {
    this.setState({ action });
  };

  deletePost = () => {
    const { fetchDeletePost, postId } = this.props;
    fetchDeletePost(postId);
  }

  render() {
    const { classes, commentCount, voteScore } = this.props;
    const { action } = this.state;

    return (
      <Fragment>
        <IconButton 
          className={classes.iconButton}
          onClick={this.deletePost}>
          <Delete />
        </IconButton>
        <Grid container spacing={0} justify="center" alignItems="center">
          <IconButton 
            className={classes.iconButton}
            onClick={this.incrementScore}>
            <ThumbUp />
          </IconButton>
          { voteScore }
          <IconButton 
            className={classes.iconButton}
            onClick={this.decrementScore}>
            <ThumbDown />
          </IconButton>
        </Grid>
        <IconButton 
          className={classes.iconButton}>
          <InsertComment /> 
        </IconButton>
        { commentCount }
      </Fragment>
    );
  }
}

//const mapStateToProps = (state) => ({
  //categories: state.categories.categories
//})

const mapDispatchToProps = ({
  fetchDeletePost
});

PostActions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(PostActions);
