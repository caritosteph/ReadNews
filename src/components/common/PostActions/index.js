import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import InsertComment from 'material-ui-icons/InsertComment';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import Delete from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import { fetchDeletePost, fetchVotePost } from '../../../actions/posts.js';
import { fetchDeleteComment, fetchVoteComment } from '../../../actions/comments.js';
import styles from './postAction.styles';

class PostActions extends Component {

  deletePost = () => {
    const { fetchDeletePost, post, isComment,
            fetchDeleteComment } = this.props;
    if(isComment) {
      fetchDeleteComment(post.id);
    } else {
      fetchDeletePost(post.id);
    }
  }

  voteScore = (voteType) => {
    const  { fetchVotePost, fetchVoteComment,  post, isComment } = this.props;
    if(isComment) {
      fetchVoteComment(post.id, voteType)
    } else {
      fetchVotePost(post.id, voteType);
    }
  }

  render() {
    const { classes, post, isComment } = this.props;

    return (
      <Fragment>
        <IconButton 
          className={classes.iconButton}
          onClick={this.deletePost}>
          <Delete />
        </IconButton>
        <Grid container spacing={0} justify={isComment ? "flex-end" : "center"} alignItems="center">
          <IconButton 
            className={classes.iconButton}
            onClick={() => this.voteScore("upVote")}>
            <ThumbUp />
          </IconButton>
          { post.voteScore }
          <IconButton 
            className={classes.iconButton}
            onClick={() => this.voteScore("downVote")}>
            <ThumbDown />
          </IconButton>
        </Grid>
        { post.commentCount >= 0 &&
          <Fragment>
            <IconButton 
              component={Link}
              to={`/${post.category}/${post.id}`}
              className={classes.iconButton}>
              <InsertComment /> 
            </IconButton>
            { post.commentCount }
          </Fragment>
        }
      </Fragment>
    );
  }
}

const mapDispatchToProps = ({
  fetchDeletePost,
  fetchVotePost,
  fetchVoteComment,
  fetchDeleteComment
});

PostActions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(PostActions);
