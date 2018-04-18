import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchAllComments } from '../../../actions/comments.js';
import Comment from './Comment';
import NewComment from './NewComment';

class Comments extends Component {

  state = {
    isEdit: false
  }

  editComment = () => {
    this.setState({
      isEdit: true
    })
  }

  finishEdition = () => {
    this.setState({
      isEdit: false
    })
  }

  componentDidMount() {
    const { fetchAllComments, postId } = this.props;
    fetchAllComments(postId);
  }

  render(){

    const { comments, postId } = this.props;
    const { isEdit } = this.state;

    return (
      <Fragment>
        <NewComment 
          postId={postId} />
        { comments.map(comment => (
            !comment.deleted && 
            <Comment 
              key={comment.id} 
              comment={comment}
              isEdit={isEdit}
              editComment={this.editComment}
              finishEdition={this.finishEdition} />
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
  comments: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
