import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
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
import { fetchNewPost } from '../../../../actions/posts';
import cuid from 'cuid';
import styles from './formPost.styles';

class FormPost extends Component {
  state = {
    category: ''
  };

  handleChooseCategory = (event) => {
    const category = event.target.value;
    this.setState({ category });
  }

  submitNewPost = (event) => {
    event.preventDefault();
    
    const { fetchNewPost, handleCloseNewPost } = this.props;
    const form = serializeForm(event.target, {hash:true})
    const values = {
      id: cuid(),
      timestamp: (new Date()).getTime(),
      ...form
    }
    fetchNewPost(values);
    handleCloseNewPost();
  }

  render(){

    const { classes, categories } = this.props;
    const { category } = this.state;

    return (
      <form autoComplete="off" onSubmit={this.submitNewPost}>
        <FormControl className={classes.container} autoComplete="off">
          <TextField required id="author"
            label="Author"
            className={classes.textField}
            name="author"
            margin="normal"
          />
          <TextField required id="title"
            label="Title"
            name="title"
            className={classes.textField}
            margin="normal"
          />
          <TextField required multiline id="content"  
            label="Content"
            name="body"
            rowsMax="4"
            className={classes.textField}
            margin="normal"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="category-post">Category</InputLabel>
          <Select value={category}
                  name="category"
                  onChange={this.handleChooseCategory}
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
  fetchNewPost
});

FormPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(FormPost);
