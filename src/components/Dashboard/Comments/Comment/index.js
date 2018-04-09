import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import { formatDate } from '../../../../utils';
import PostActions from '../../../common/PostActions';
import styles from './comment.styles';

const Comment = ({ classes, comment }) => {
  return (
      <Grid classes={{ typeItem: classes.grid }}>
        <Card 
            className={classes.card}
            elevation={1}
            spacing={4}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        C
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={comment.author}
                    subheader={formatDate(comment.timestamp)}
                  />
                  <CardContent>
                    <Typography component="p">
                      {comment.body}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                    <PostActions />
                  </CardActions>
                </Card>
      </Grid>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
