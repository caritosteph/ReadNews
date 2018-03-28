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
import styles from './formPost.styles';

class FormPost extends Component {
  state = {
    category: ''
  };

  handleChooseCategory = (event) => {
    const category = event.target.value;

    this.setState({ category });
  }

  render(){
    const { classes, categories } = this.props;
    const { category } = this.state;

    return (
      <form autoComplete="off">
        <FormControl className={classes.container} noValidate autoComplete="off">
          <TextField required id="author"
            label="Author"
            className={classes.textField}
            margin="normal"
          />
          <TextField required id="title"
            label="Title"
            className={classes.textField}
            margin="normal"
          />
          <TextField required multiline id="content"
            label="Content"
            rowsMax="4"
            className={classes.textField}
            margin="normal"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="category-post">Category</InputLabel>
          <Select value={category}
                  onChange={this.handleChooseCategory}>
            { categories.map( category => (
              <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

FormPost.propTypes = {
  classes: PropTypes.object.isRequired
};



const mapStateToProps = (state) => ({
  categories: state.categories.categories
})

FormPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles)
)(FormPost);
