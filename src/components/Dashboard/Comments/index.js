import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchAllComments } from '../../../actions/comments.js';
import Comment from './Comment';

class Comments extends Component {

  componentDidMount() {
    const { fetchAllComments, postId } = this.props;
    fetchAllComments(postId);
  }

  render(){

    const { comments } = this.props;

    return (
      <Fragment>
        { comments.map(comment => (
            <Comment 
              key={comment.id} 
              comment={comment} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
