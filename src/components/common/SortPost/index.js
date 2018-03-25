import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import styles from './sortPost.styles';


class SortPost extends Component {

  state = {
    sortby: ''
  };

  handleSort = (event) => {
    const { handleSortPost } = this.props;
    const sortby = event.target.value;
    this.setState({ sortby })
    handleSortPost(sortby)
  }

  render() {
    const { classes } = this.props;
    const { sortby } = this.state;

    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="sort-posts">Sort Posts</InputLabel>
        <Select value={sortby}
                onChange={this.handleSort}>
          <MenuItem value="-timestamp">Newest</MenuItem>
          <MenuItem value="timestamp">Oldest</MenuItem>
          <MenuItem value="-voteScore">Highest vote</MenuItem>
          <MenuItem value="voteScore">Lowest vote</MenuItem>
        </Select>
      </FormControl>
    )
  }
}

SortPost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SortPost);
