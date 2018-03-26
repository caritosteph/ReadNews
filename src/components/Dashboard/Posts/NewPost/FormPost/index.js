import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import styles from './formPost.styles';

class FormPost extends Component {

  render(){
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.container} noValidate autoComplete="off">
          <TextField
            required
            id="author"
            label="Author"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            id="title"
            label="Title"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            required
            multiline
            id="content"
            label="Content"
            rowsMax="4"
            className={classes.textField}
            margin="normal"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Category</InputLabel>
           <Select
             required
             value={""}>
             <MenuItem value={10}>Ten</MenuItem>
             <MenuItem value={20}>Twenty</MenuItem>
             <MenuItem value={30}>Thirty</MenuItem>
           </Select>
        </FormControl>
      </form>
    );
  }
}

FormPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormPost);
