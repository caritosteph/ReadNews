import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { formatDate } from '../../../../utils';
import PostActions from '../../../common/PostActions';
import styles from './post.styles';

const Post = ({ classes, post, value }) => {
  return (
      <Grid item xs={3} sm={3}
        classes={{ typeItem: classes.grid }}
        component={Link}
        to="`/posts/${post.id}`">
        <Card elevation={0}
          className={classes.card}
          >
          <CardContent>
            <Typography 
              className={classes.cardTitle} 
              variant="title" 
              component="h2">
              {post.title}
            </Typography>
            <Typography 
              color="textSecondary">
              Category: {post.category}
            </Typography>
            <Typography 
              className={classes.cardBody} 
              color="textSecondary">
              {post.body}
            </Typography>
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Avatar 
                  classes= {{ root: classes.authorAvatar}}>
                  {post.author.charAt(0).toUpperCase()}
                </Avatar>
              </Grid>
              <Grid item xs={9}>
                <Typography color="textSecondary">
                  {post.author.charAt(0).toUpperCase()}{post.author.substring(1)}
                </Typography>
                <Typography color="textSecondary">
                  {formatDate(post.timestamp)}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions 
            className={classes.cardActions}
            disableActionSpacing>
            <PostActions 
              commentCount={post.commentCount} 
              voteScore={post.voteScore}/>
          </CardActions>
        </Card>
      </Grid>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
