import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Grid from 'material-ui/Grid';
import { CardActions } from 'material-ui/Card';
import PostActions from '../../common/PostActions';
import { postsDetails } from '../../../utils/api'
import { formatDate } from '../../../utils'
import Comments from '../Comments';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import NotFound from '../../common/NotFound';
import { emptyObject } from '../../../utils';
import styles from './postDetail.styles';

class PostDetail extends Component {

  state = {
    post: ""
  }

  componentDidMount() {
    this.getPostDetail();
  }

  getPostDetail = () => {
    const { match } = this.props;
    const id = match.params.id;
    postsDetails(id)
      .then( post => {
        this.setState({ post })
      })
  }

  componentWillReceiveProps(nextProps) {
    const { posts } = this.props;

    if(nextProps.posts !== posts) {
      this.setState({ post: nextProps.posts[0]});
    }
  }

  render() {

    const { classes, match } = this.props;
    const { post } = this.state;
    const id = match.params.id;

    console.log("post: ", post)
    return (
      <Fragment>
      { !emptyObject(post) ?
          <Fragment>
            <AppBar position="static">
              <Toolbar>
                <IconButton 
                  component={Link}
                  to="/"
                  color="inherit">
                  <ArrowBack />
                </IconButton>
                <Grid container spacing={0} justify="center">
                  <Typography 
                    variant="title" 
                    color="inherit">
                    ReadNews
                  </Typography>
                </Grid>
              </Toolbar>
            </AppBar>
            <Grid container spacing={0} className={classes.grid}>
              <Grid item xs={5}>
                <Grid 
                  container 
                  spacing={0} 
                  direction="row"
                  className={classes.detailHeader}>
                    <Avatar 
                      classes= {{ root: classes.authorAvatar}}>
                      {post && post.author.charAt(0).toUpperCase()}
                    </Avatar>
                    <Grid className={classes.detail}>
                      <Typography color="textSecondary" variant="title" gutterBottom>
                        {post.author}
                      </Typography>
                      <Typography color="textSecondary" variant="body1">
                        {formatDate(post.timestamp)}
                      </Typography>
                    </Grid>   
                </Grid>    
                <Typography variant="display1" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {post.body}
                </Typography>
                <CardActions 
                  className={classes.cardActions}
                  disableActionSpacing>
                  <PostActions 
                    postId={post.id}
                    commentCount={post.commentCount} 
                    voteScore={post.voteScore} />
                </CardActions>
                <Comments postId={id} />
              </Grid>
            </Grid>
          </Fragment>
          : <NotFound />
      }
      </Fragment>
    )
  }
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts
});

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(PostDetail);
