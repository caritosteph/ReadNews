import React, { Component, Fragment } from 'react';
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
import cuid from 'cuid';
import { fetchAllComments } from '../../../actions/comments.js';
import Comment from './Comment';
import styles from './comments.styles';

class Comments extends Component {

  componentDidMount() {
    const { fetchAllComments, postId } = this.props;
    fetchAllComments(postId);
  }

  render(){

    const { classes, comments } = this.props;

    return (
      <Fragment>
        { comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          )) 
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments.comments
});

const mapDispatchToProps = ({
  fetchAllComments
});

Comments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Comments);
