import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import serializeForm from 'form-serialize';
import { fetchNewPost, fetchUpdatePost } from '../../../../actions/posts';
import cuid from 'cuid';
import styles from './formPost.styles';

class FormPost extends Component {
  state = {
    category: '',
    newPost: ''
  };

  handleChooseCategory = (event, input) => {
    const category = event.target.value;

    this.setState(state => ({
      newPost: {
        ...state.newPost,
        ...{[input]: category}
      }
    }));
  }

  submitNewPost = (event) => {
    event.preventDefault();
    const { fetchNewPost, handleCloseNewPost, fetchUpdatePost, post } = this.props;
    const form = serializeForm(event.target, {hash:true})
    const values = {
      id: cuid(),
      timestamp: (new Date()).getTime(),
      ...form
    }

    if(post) {
      fetchUpdatePost(post.id, form);
    } else {
      fetchNewPost(values);
    }
    handleCloseNewPost();
  }

  handleChange = (event, input) => {
    const inputValue = event.target.value;
    const newInput = {[input]: inputValue};

    this.setState(state => ({
      newPost: {
        ...state.newPost,
        ...newInput
      }
    }));
  }

  componentDidMount() {
    const { post } = this.props;
    console.log("form_ ", post)
    if(post) {
      this.setState({
        newPost: {...post}
      });
    }
  } 

  render(){

    const { classes, categories } = this.props;
    const { newPost } = this.state;

    return (
      <form onSubmit={this.submitNewPost}>
        <FormControl className={classes.container}>
          <TextField 
            required
            label="Author"
            className={classes.textField}
            name="author"
            margin="normal"
            value={newPost.author || ""}
            onChange={(event) => this.handleChange(event, "author")} />
          <TextField 
            required
            label="Title"
            name="title"
            className={classes.textField}
            margin="normal"
            value={newPost.title || ""}
            onChange={(event) =>this.handleChange(event, "title")} />
          <TextField 
            required 
            multiline
            label="Content"
            name="body"
            className={classes.textField}
            margin="normal"
            value={newPost.body || ""}
            onChange={(event) => this.handleChange(event, "body")} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Category</InputLabel>
          <Select value={newPost.category || ""}
                  name="category"
                  onChange={(event) => this.handleChooseCategory(event, "category")}
                  required>
            { categories.map( category => (
              <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Grid container spacing={0} justify="center" className={classes.button}>
          <Button
            variant="raised"
            type="submit"
            color="primary">
            Save Post
          </Button>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories
});

const mapDispatchToProps = ({
  fetchNewPost,
  fetchUpdatePost
});

FormPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(FormPost);
