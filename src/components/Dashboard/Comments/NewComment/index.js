import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Person from 'material-ui-icons/Person';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import styles from './newComment.styles.js';

class NewComment extends Component {

  state = {
    multiline: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentDidMount() {
  }

  render(){

    const { classes } = this.props;

    return (
        <Card elevation={1}
          className={classes.card}>
          <CardHeader
            avatar={
              <Avatar >
                <Person />
              </Avatar>
            }
            title={<TextField
                fullWidth
                placeholder="Write your name"
                value={this.state.multiline}
                onChange={this.handleChange('multiline')}
                className={classes.textField}
                margin="normal" />}
          />
          <CardContent>
             <TextField
                fullWidth
                multiline
                rowsMax="4"
                placeholder="Write a comment"
                value={this.state.multiline}
                onChange={this.handleChange('multiline')}
                className={classes.textField}
                margin="normal" />
          </CardContent>
          <CardActions 
            className={classes.actions} 
            disableActionSpacing>
            <Button color="primary">
              Publish
            </Button>
          </CardActions>
        </Card>
    );
  }
}

NewComment.propTypes = {
};

export default withStyles(styles)(NewComment);
