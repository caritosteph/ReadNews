import React, { Component } from 'react';
import { connect } from 'react-redux'
import serializeForm from 'form-serialize';
import FormComment from './FormComment';
import { fetchNewComment, fetchUpdatePost } from  '../../../../actions/comments.js';
import cuid from 'cuid';

class NewComment extends Component {

  state = {
    newComment: ""
  };

  addNewComment = (event)  => {
    event.preventDefault();
    const { fetchNewComment, postId, comment, fetchUpdatePost, finishEdition } = this.props;
    const form = serializeForm(event.target, {hash:true})
    const values = {
      id: cuid(),
      timestamp: (new Date()).getTime(),
      parentId: postId,
      ...form
    }
    if(comment) {
      fetchUpdatePost(comment.id, {
        ...form,
        timestamp: (new Date()).getTime()
      });
      finishEdition();
    } else {
      fetchNewComment(values);
    }
    this.setState({ newComment: ''});
  }

  handleChange = (event, input) => {
    const inputValue = event.target.value;
    const newInput = {[input]: inputValue};

    this.setState(state => ({
      newComment: {
        ...state.newComment,
        ...newInput
      }
    }));
  }

  componentDidMount() {
    const { comment } = this.props;
    if(comment) {
      this.setState({
        newComment: {...comment}
      });
    }
  } 

  render(){
    
    const { newComment } = this.state;

    return (
      <FormComment 
        addNewComment={this.addNewComment}
        newComment={newComment}
        handleChange={this.handleChange} />
    );
  }
}

const mapDispatchToProps = ({
  fetchNewComment,
  fetchUpdatePost
});

export default connect(null, mapDispatchToProps)(NewComment);
