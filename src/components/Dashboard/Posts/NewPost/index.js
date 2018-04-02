import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import Grid from 'material-ui/Grid';
import FormPost from './FormPost';
import styles from './newPost.styles';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class NewPost extends React.Component {

  render() {
    const { classes, open, handleCloseNewPost } = this.props;

    return (
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleCloseNewPost}
          transition={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={handleCloseNewPost} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                New Post
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container spacing={0}
                justify="center"
                className={classes.gridForm}>
            <FormPost />
          </Grid>
        </Dialog>
      </div>
    );
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPost);
