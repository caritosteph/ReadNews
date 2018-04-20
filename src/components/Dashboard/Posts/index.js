import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import sortBy from 'sort-by';
import { fetchAllPost } from '../../../actions/posts';
import Grid from 'material-ui/Grid';
import Post from './Post';
import NewPost from '../NewPost';

class Posts extends Component {

  state = {
    editPost: false,
    post: ""
  };

  componentDidMount = () => {
    const { fetchAllPost, category } = this.props;
    fetchAllPost(category);
  }

  componentWillReceiveProps = (nextProps) => {
    const { category } = this.props;
    if(nextProps.category !== category) {
      const { fetchAllPost } = this.props;
      fetchAllPost(nextProps.category);
    }
  }

  editPost = (post) => {
    this.setState({ 
      editPost: true,
      post
    })
  }

  handleCloseEditPost = () => {
    this.setState({ editPost: false })
  }

  render(){

    const { posts, sortby } = this.props;
    const { editPost, post } = this.state;

    return (
      <Grid container spacing={8}>
        {
          posts && posts.sort(sortBy(sortby.sortby)).map(post => (
              !post.deleted && <Post 
                                  key={post.id} 
                                  post={post}
                                  editPost={this.editPost} />
          ))
        }
        <NewPost 
          open={editPost}
          handleCloseNewPost={this.handleCloseEditPost}
          post={post} />
      </Grid>
    );
  }
}



const mapStateToProps  = (state, ownProps) => {
  return {
      posts: state.posts.posts,
      sortby: state.posts
  }
}

const mapDispatchToProps = ({
  fetchAllPost
});

Posts.propTypes = {
  posts: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
