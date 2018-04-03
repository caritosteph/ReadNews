import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import PostActions from '../../common/PostActions';
import { postsDetails } from '../../../utils/api'
import { formatDate } from '../../../utils'
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
      .then( post => this.setState({ post }))
  }

  render() {

    const { classes } = this.props;
    const { post } = this.state;

    return (
      <Grid container spacing={0} className={classes.grid}>
        <Grid item xs></Grid>
        <Grid item xs={4}>
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
          <PostActions 
            commentCount={post.commentCount} 
            voteScore={post.voteScore}/>
        </Grid>
        <Grid item xs></Grid>
      </Grid>

    )
  }
};

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostDetail);
