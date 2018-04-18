import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Person from 'material-ui-icons/Person';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import styles from './formComment.styles';

const FormComment = ({ classes, addNewComment, newComment, handleChange }) => (
  <form onSubmit={addNewComment}>
    <Card elevation={4}
      className={classes.card}>
      <CardHeader
        avatar={
          <Avatar >
            <Person />
          </Avatar>
        }
        title={<TextField
            fullWidth
            required
            placeholder="Write your name"
            name="author"
            autoFocus
            value={newComment.author || ""}
            onChange={(event) => handleChange(event, "author")}
            className={classes.textField}
            margin="normal" />}
      />
      <CardContent>
         <TextField
            fullWidth
            required
            multiline
            rowsMax="4"
            placeholder="Write a comment"
            name="body"
            value={newComment.body || ""}
            onChange={(event) => handleChange(event, "body")}
            className={classes.textField}
            margin="normal" />
      </CardContent>
      <CardActions 
        className={classes.actions} 
        disableActionSpacing>
        <Button 
          type="submit"
          color="primary">
          Publish
        </Button>
      </CardActions>
    </Card>
  </form>
);

FormComment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormComment);
