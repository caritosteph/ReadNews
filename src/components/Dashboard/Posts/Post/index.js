import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { formatDate } from '../../../../utils';
import PostActions from '../../../common/PostActions';
import IconButton from 'material-ui/IconButton';
import Create from 'material-ui-icons/Create';
import styles from './post.styles';

const Post = ({ classes, post, value, editPost }) => {
  return (
      <Grid item xs={3} sm={3}>
        <Card elevation={0}
          className={classes.card}>
          <CardHeader
            className={classes.cardTitle} 
            action={
              <IconButton
                onClick={() => editPost(post)}>
                <Create />
              </IconButton>
            }
            title={<Typography 
                className={classes.cardTitle} 
                variant="title" 
                component={Link}
                to={`/${post.category}/${post.id}`}>
                {post.title}
              </Typography>}
          />
          <CardContent>
            <Link to={`/${post.category}/${post.id}`}
              className={classes.cardcontent}>
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
            </Link>
          </CardContent>
          <CardActions 
            className={classes.cardActions}
            disableActionSpacing>
            <PostActions 
              post={post} />
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
