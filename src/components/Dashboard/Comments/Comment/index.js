import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Person from 'material-ui-icons/Person';
import Avatar from 'material-ui/Avatar';
import { formatDate } from '../../../../utils';
import PostActions from '../../../common/PostActions';
import Create from 'material-ui-icons/Create';
import styles from './comment.styles';

const Comment = ({ classes, comment }) => {
  return (
    <Card 
        className={classes.card}
        elevation={4}>
      <CardHeader
        avatar={
          <Avatar>
            <Person />
          </Avatar>
        }
        action={
          <IconButton
           // onClick={() => handleEditPost(post)}
           >
             <Create />
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
      <CardActions>
        <PostActions 
              isComment={true}
              postId={comment.id}
              voteScore={comment.voteScore}/>
      </CardActions>
    </Card>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
