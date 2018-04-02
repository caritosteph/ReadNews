import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import sortBy from 'sort-by';
import { fetchAllPost } from '../../../actions/posts';
import Grid from 'material-ui/Grid';
import Post from './Post';

class Posts extends Component {

  componentDidMount = () => {
    const { fetchAllPost } = this.props;
    fetchAllPost();
  }

  componentWillReceiveProps = (nextProps) => {
    const { category } = this.props;
    if(nextProps.category !== category) {
      const { fetchAllPost } = this.props;
      fetchAllPost(nextProps.category);
    }
  }

  render(){
    const { posts, sortby } = this.props;

    return (
      <Grid container spacing={8}>
        {
          posts && posts.sort(sortBy(sortby.sortby)).map(post => (
              <Post key={post.id} post={post} />
          ))
        }
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
