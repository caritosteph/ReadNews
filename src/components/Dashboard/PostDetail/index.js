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
import { fetchAllPost } from '../../../actions/posts';
import styles from './postDetail.styles';

class PostDetail extends Component {

  state = {
    post: ""
  }

  componentDidMount() {
    const { fetchAllPost } = this.props;
    this.getPostDetail();
    fetchAllPost(); //  when user load page direct to details
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
    const { posts, comments } = this.props;

    if(nextProps.posts !== posts || nextProps.comments  !== comments) {
      this.getPostDetail();
    }
  }

  render() {

    const { classes, match } = this.props;
    const { post } = this.state;
    const id = match.params.id;

    return (
      <Fragment>
      { !emptyObject(post) ?
          <Fragment>
            <AppBar position="static">
              <Toolbar>
                <IconButton 
                  component={Link}
                  to={`/${post.category}`}
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
                    post={post} />
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
  posts: state.posts.posts,
  comments: state.comments.comments
});

const mapDispatchToProps = ({
  fetchAllPost
});

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(PostDetail);
