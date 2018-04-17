import React, { Component } from 'react';
import { connect } from 'react-redux'
import serializeForm from 'form-serialize';
import FormComment from './FormComment';
import { fetchNewComment } from  '../../../../actions/comments.js';
import cuid from 'cuid';

class NewComment extends Component {

  addNewComment = (event)  => {
    event.preventDefault();
    const { fetchNewComment, postId } = this.props;
    const form = serializeForm(event.target, {hash:true})
    const values = {
      id: cuid(),
      timestamp: (new Date()).getTime(),
      parentId: postId,
      ...form
    }
    /*if(post) {
      fetchUpdatePost(post.id, form);
    } else {
      fetchNewPost(values);
    }*/
    fetchNewComment(values);
    document.getElementById("commentForm").reset();
  }

  render(){
    return (
      <FormComment addNewComment={this.addNewComment}/>
    );
  }
}

const mapDispatchToProps = ({
  fetchNewComment,
  //fetchUpdatePost
});

export default connect(null, mapDispatchToProps)(NewComment);
